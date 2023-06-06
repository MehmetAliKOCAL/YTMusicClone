<script setup>
import { useGlobalVariablesStore } from "~/store/globalVariables";
const globalVariables = useGlobalVariablesStore();
let currentlyPlayingSong = ref("");
let videoLoadPercentage = ref(0);
let currentPlayTime = ref(0);
let videoDuration = ref(0);
let isPlaying = ref(false);
let songPlayingProgress = ref(null);
let songVolume = ref(100);
let elementBeingHovered = ref(null);

function prepareMediaPlayer() {
  if (ytPlayer.getPlayerState() === 1) {
    getVideoLoadPercentage();
    getVideoDuration();
    getCurrentPlayTime();
    songVolume.value = getSongVolume();
  } else {
    resetPlayerData();
    setTimeout(() => {
      prepareMediaPlayer();
    }, 500);
  }
}

function resetPlayerData() {
  videoDuration.value = 0;
  currentPlayTime.value = 0;
  videoLoadPercentage.value = 0;
}

function getVideoDuration() {
  videoDuration.value = ytPlayer.getDuration().toFixed(0);
}

function getVideoLoadPercentage() {
  videoLoadPercentage.value = ytPlayer.getVideoLoadedFraction() * 100;
  if (ytPlayer.getPlayerState() !== YT.PlayerState.ENDED) {
    setTimeout(() => {
      getVideoLoadPercentage();
    }, 1000);
  }
}

function getCurrentPlayTime() {
  currentPlayTime.value = ytPlayer.getCurrentTime().toFixed();
  if (ytPlayer.getPlayerState() !== YT.PlayerState.ENDED) {
    setTimeout(() => {
      getCurrentPlayTime();
    }, 100);
  }
}

function calculateDesiredSecond() {
  return (videoDuration.value / 100) * songPlayingProgress.value.value;
}

function jumpToDesiredSecond() {
  const progress = songPlayingProgress.value;
  const desiredSecond = calculateDesiredSecond();

  progress.style.backgroundImage = `linear-gradient(to right, red ${progress.value}%, transparent ${progress.value}%)`;

  ytPlayer.seekTo(desiredSecond, true);
}

function playVideo() {
  ytPlayer.playVideo();
  isPlaying.value = true;
}

function pauseVideo() {
  ytPlayer.pauseVideo();
  isPlaying.value = false;
}

function changePlayerState() {
  if (
    ytPlayer.getPlayerState() === YT.PlayerState.PLAYING ||
    ytPlayer.getPlayerState() === YT.PlayerState.BUFFERING
  ) {
    pauseVideo();
  } else {
    playVideo();
  }
}

function getSongVolume() {
  return ytPlayer.getVolume();
}

function changeSongVolume() {
  ytPlayer.setVolume(songVolume.value);
}

function loadAndPlayVideo(videoID) {
  ytPlayer.loadVideoById(videoID, 0);
}

let ytPlayer;
function onYouTubeIframeAPIReady() {
  const element = document.querySelector("#youtube-audio");
  ytPlayer = new YT.Player("youtube-player", {
    height: "0",
    width: "0",
    videoId: element.dataset.video,
    playerVars: {
      autoplay: element.dataset.autoplay,
      loop: element.dataset.loop,
    },
    events: {
      onReady: (e) => {
        ytPlayer.setPlaybackQuality("small");
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          isPlaying.value = false;
        }
      },
    },
  });
}

globalVariables.$subscribe((mutations, states) => {
  currentlyPlayingSong.value = states.currentlyPlayingSong;

  watch(states.currentlyPlayingSong, () => {
    loadAndPlayVideo(currentlyPlayingSong.value.id);
    prepareMediaPlayer();
    changePlayerState();
  });
});

onMounted(() => {
  onYouTubeIframeAPIReady();
});
</script>

<template>
  <div
    class="w-full h-[72px] fixed bottom-0 text-white bg-[#202120] transform transition-all duration-300"
    :class="[
      !currentlyPlayingSong.hasOwnProperty('title') ? 'translate-y-[80px]' : '',
    ]"
  >
    <div id="youtube-player" class="absolute w-0 h-0 -z-100" />
    <div
      @mouseenter="elementBeingHovered = 'progressBar'"
      @mouseleave="elementBeingHovered = null"
      class="h-8 -mt-4 w-full flex items-center transform absolute"
      :class="[elementBeingHovered === 'progressBar' ? 'scale-y-[175%]' : '']"
    >
      <div class="h-[2px] w-full bg-[#393938]">
        <div
          class="h-full bg-[#4C4C4C]"
          :style="`width:${videoLoadPercentage}%`"
        />
        <input
          @input="jumpToDesiredSecond()"
          type="range"
          min="0"
          max="100"
          step="0.1"
          ref="songPlayingProgress"
          :value="(currentPlayTime / videoDuration) * 100 || 0"
          class="-mt-0.5 absolute songPlayingProgress"
          :style="`background:linear-gradient(to right, red ${songPlayingProgress?.value}%, transparent ${songPlayingProgress?.value}%)`"
          :class="[
            elementBeingHovered === 'progressBar'
              ? 'correctedSliderThumb'
              : 'defaultSliderThumb',
          ]"
        />
      </div>
    </div>

    <div class="px-4 py-2 h-full flex items-center">
      <div class="flex items-center gap-x-6 max-md:gap-x-2">
        <IconsPrevious
          @click="ytPlayer.previousVideo()"
          color="#fff"
          wrapperElementClassList="w-6 cursor-pointer"
        />
        <div
          @click="changePlayerState()"
          :data-video="currentlyPlayingSong?.id"
          data-autoplay="0"
          data-loop="1"
          id="youtube-audio"
        >
          <IconsPlay
            v-if="!isPlaying"
            color="#fff"
            wrapperElementClassList="w-9 cursor-pointer"
          />
          <IconsPause
            v-else
            color="#fff"
            wrapperElementClassList="w-9 cursor-pointer"
          />
        </div>
        <IconsNext
          @click="ytPlayer.nextVideo()"
          id="nextVideo"
          color="#fff"
          wrapperElementClassList="w-6 cursor-pointer"
        />
      </div>
      <p class="mx-4 text-xs text-white/50 shrink-0">
        {{
          (currentPlayTime - (currentPlayTime % 60)) / 60 +
          ":" +
          ("0" + (currentPlayTime % 60)).slice(-2)
        }}
        /
        {{
          (videoDuration - (videoDuration % 60)) / 60 +
          ":" +
          ("0" + (videoDuration % 60)).slice(-2)
        }}
      </p>
      <div class="w-16 flex justify-end max-md:hidden">
        <img
          :src="currentlyPlayingSong?.image"
          :alt="currentlyPlayingSong?.title"
          class="max-h-10 rounded-[3px]"
        />
      </div>
      <div class="text-sm font-medium ml-4 leading-[18px] truncate">
        <p class="truncate">{{ currentlyPlayingSong?.title }}</p>
        <div class="flex truncate">
          <NuxtLink
            v-for="artist in currentlyPlayingSong?.artists"
            :key="artist"
            :to="artist.link"
            class="mr-1 hover:underline text-white/70"
          >
            <p>
              {{
                artist.name +
                (artist !== currentlyPlayingSong?.artists.at(-1) ? "," : "")
              }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <input
        @input="changeSongVolume()"
        type="range"
        min="0"
        max="100"
        step="0.1"
        v-model="songVolume"
        class="volumeBar ml-4"
      />
    </div>
  </div>
</template>
<style scoped>
.songPlayingProgress {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 2px;
  background: transparent;
}

.defaultSliderThumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: red;
}

.defaultSliderThumb::-moz-range-thumb {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: red;
}

.correctedSliderThumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  width: 14px;
  border-radius: 50%;
  background-color: red;
}

.correctedSliderThumb::-moz-range-thumb {
  height: 8px;
  width: 14px;
  border-radius: 50%;
  background-color: red;
}

.volumeBar {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  width: 80px;
  height: 2px;
  background: white;
}

.volumeBar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: white;
  outline: 10px solid rgba(255, 255, 255, 0.15);
  transition: all 200ms;
}

.volumeBar::-webkit-slider-thumb:hover {
  outline: 0px solid;
}

.volumeBar::-moz-range-thumb {
  height: 12px;
  width: 12spx;
  border-radius: 50%;
  background-color: white;
  outline: 10px solid rgba(255, 255, 255, 0.15);
  transition: all 200ms;
}

.volumeBar::-moz-range-thumb:hover {
  outline: 0px solid;
}
</style>
