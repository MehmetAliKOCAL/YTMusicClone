<script setup>
const isPlaying = ref(false);

function onYouTubeIframeAPIReady() {
  const element = document.querySelector("#youtube-audio");
  let ytPlayer = new YT.Player("youtube-player", {
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
        }
      },
    },
  });

  element.onclick = () => {
    if (
      ytPlayer.getPlayerState() === YT.PlayerState.PLAYING ||
      ytPlayer.getPlayerState() === YT.PlayerState.BUFFERING
    ) {
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  };
}

onMounted(() => {
  onYouTubeIframeAPIReady();
});
</script>
<template>
  <div class="w-full h-[72px] fixed bottom-0 text-white bg-[#202120]">
    <div id="youtube-player" class="absolute w-0 h-0 -z-100" />
    <div class="bg-[#4C4C4C] h-[2px]" />
    <div class="px-4 py-2 h-full flex items-center">
      <div
        data-video="MonFx8pX6U4"
        data-autoplay="0"
        data-loop="1"
        id="youtube-audio"
        class="flex items-center gap-x-6"
      >
        <IconsPrevious
          color="#fff"
          wrapperElementClassList="w-6 cursor-pointer"
        />
        <IconsPlay
          v-if="!isPlaying"
          @click="isPlaying = !isPlaying"
          color="#fff"
          wrapperElementClassList="w-9 cursor-pointer"
        />
        <IconsPause
          v-else
          @click="isPlaying = !isPlaying"
          color="#fff"
          wrapperElementClassList="w-9 cursor-pointer"
        />
        <IconsNext color="#fff" wrapperElementClassList="w-6 cursor-pointer" />
      </div>

      <p class="mx-4 text-xs text-white/50">0:09 / 2:29</p>
    </div>
  </div>
</template>
