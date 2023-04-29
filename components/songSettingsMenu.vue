<script setup>
import { useGlobalVariablesStore } from "~/store/globalVariables";
import { OnClickOutside } from "@vueuse/components";
const globalVariables = useGlobalVariablesStore();

const songSettings = [
  {
    text: "Start radio",
    link: "/",
    icon: "startRadio",
  },
  {
    text: "Play next",
    link: "/",
    icon: "playNext",
  },
  {
    text: "Add to queue",
    link: "/",
    icon: "addToQueue",
  },
  {
    text: "Remove from liked songs",
    link: "/",
    icon: "removeFromLikedSongs",
  },
  {
    text: "Add to playlist",
    link: "/",
    icon: "addToPlaylist",
  },
  {
    text: "Share",
    link: "/",
    icon: "share",
  },
];
</script>

<template>
  <OnClickOutside @trigger="globalVariables.showSongSettings = false">
    <div
      id="songSettingsMenu"
      class="py-4 z-10 absolute text-white bg-[#202120] border border-white/10 rounded-sm transition-all duration-100 overflow-auto"
      :class="[
        globalVariables.showSongSettings
          ? 'opacity-100 visible'
          : 'opacity-0 invisible',
      ]"
    >
      <NuxtLink
        v-for="item in songSettings"
        :key="item"
        :to="item.link"
        class="flex items-center hover:bg-white/5"
      >
        <div class="w-14 py-3 px-4">
          <IconRenderer :iconName="item.icon" />
        </div>
        <p class="text-sm pr-8">{{ item.text }}</p>
      </NuxtLink>
    </div></OnClickOutside
  >
</template>
