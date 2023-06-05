<script setup>
import { useGlobalVariablesStore } from "~/store/globalVariables";
const globalVariables = useGlobalVariablesStore();
const isPlaying = ref(false);
let currentlyPlayingSong = ref("");
let duration = ref(0);
let currentTime = ref(0);

globalVariables.$subscribe((mutation, state) => {
  currentlyPlayingSong.value = state.currentlyPlayingSong;

  watch(state.currentlyPlayingSong, () => {
    ytPlayer.loadVideoById(currentlyPlayingSong.value.id, 0);
    playOrPauseVideo();
    setTimeout(() => {
      duration.value = ytPlayer.getDuration().toFixed(0);
      getCurrentTime();
    }, 1000);
  });
});

function getCurrentTime() {
  currentTime.value = ytPlayer.getCurrentTime().toFixed();
  if (ytPlayer.getPlayerState() !== YT.PlayerState.ENDED) {
    setTimeout(() => {
      getCurrentTime();
    }, 1000);
  }
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
          // CHANGE THE IMAGE OF THE SONG
          isPlaying.value = false;
        }
      },
    },
  });
}

function playOrPauseVideo() {
  if (
    ytPlayer.getPlayerState() === YT.PlayerState.PLAYING ||
    ytPlayer.getPlayerState() === YT.PlayerState.BUFFERING
  ) {
    ytPlayer.pauseVideo();
    isPlaying.value = false;
  } else {
    ytPlayer.playVideo();
    isPlaying.value = true;
  }
}

onMounted(() => {
  onYouTubeIframeAPIReady();
});
</script>
<template>
  <div
    class="w-full h-[72px] fixed bottom-0 text-white bg-[#202120] transform transition-all duration-300"
    :class="[
      !currentlyPlayingSong.hasOwnProperty('title') ? 'translate-y-[72px]' : '',
    ]"
  >
    <div id="youtube-player" class="absolute w-0 h-0 -z-100" />
    <div class="bg-[#4C4C4C] h-[2px]" />
    <div class="px-4 py-2 h-full flex items-center">
      <div class="flex items-center gap-x-6">
        <IconsPrevious
          @click="ytPlayer.previousVideo()"
          color="#fff"
          wrapperElementClassList="w-6 cursor-pointer"
        />
        <div
          @click="playOrPauseVideo()"
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

      <p class="mx-4 text-xs text-white/50">
        {{
          (currentTime - (currentTime % 60)) / 60 +
          ":" +
          ("0" + (currentTime % 60)).slice(-2)
        }}
        /
        {{
          (duration - (duration % 60)) / 60 +
          ":" +
          ("0" + (duration % 60)).slice(-2)
        }}
      </p>
      <img
        :src="currentlyPlayingSong?.image"
        :alt="currentlyPlayingSong?.title"
        class="ml-10 max-h-10 rounded-[3px]"
      />
      <div class="text-sm font-medium ml-4 leading-[18px]">
        <p>{{ currentlyPlayingSong?.title }}</p>
        <div class="flex">
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
    </div>
  </div>
</template>
