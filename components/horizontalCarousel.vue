<script setup>
import { useScroll, useElementSize } from "@vueuse/core";

const carousel = ref(null);
const carouselWrapper = ref(null);
const { width: carouselWrapperWidth } = useElementSize(carouselWrapper);
const { x: carouselScrollValue } = useScroll(carousel, { behavior: "smooth" });

const props = defineProps({
  image: {
    type: Object,
    required: false,
    default: { showImage: false, link: "" },
  },
  title: {
    type: Object,
    required: false,
    default: { text: "", redirect: "/" },
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
  items: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>

<template>
  <div ref="carouselWrapper" class="text-white w-full overflow-hidden">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink v-if="props?.image?.showImage" :to="props.image.redirect">
          <img
            :class="{ 'rounded-full': props?.image?.isRounded }"
            :src="props?.image?.path"
            :alt="props?.image?.alt"
            width="48"
            height="48"
            class="mr-4 max-w-12 max-h-12"
        /></NuxtLink>
        <div class="flex flex-col gap-y-1">
          <h1 class="text-[14px] text-[#AAA] uppercase">
            {{ props.subtitle }}
          </h1>
          <NuxtLink
            :to="props.title?.link"
            class="text-2xl font-bold"
            :class="[props.title?.link ? 'hover:underline' : 'cursor-default']"
            >{{ props.title.text }}</NuxtLink
          >
        </div>
      </div>
      <div class="flex gap-x-6 items-center">
        <button
          class="py-2 px-4 h-fit border border-white/20 text-sm font-medium rounded-full transition-colors duration-200 hover:bg-white/10"
        >
          More
        </button>
        <div class="flex gap-x-4 items-center max-ytxs:hidden">
          <button @click="carouselScrollValue -= 750">
            <IconsLeftArrow
              color="white"
              class="w-10 p-2 rounded-full border border-white/20 transform transition-all duration-200"
              :class="[
                carouselScrollValue === 0
                  ? 'cursor-default opacity-30'
                  : 'hover:bg-white/10 active:scale-90',
              ]"
            />
          </button>
          <button @click="carouselScrollValue += 750">
            <IconsRightArrow
              color="white"
              class="w-10 p-2 rounded-full border border-white/20 transform transition-all duration-200"
              :class="[
                carouselScrollValue + carouselWrapperWidth >= 1060
                  ? 'cursor-default opacity-30'
                  : 'hover:bg-white/10 active:scale-90',
              ]"
            />
          </button>
        </div>
      </div>
    </div>

    <div
      ref="carousel"
      class="mt-4 text-sm font-medium flex space-x-4 overflow-y-hidden overflow-x-auto scrollbarStyle"
    >
      <div v-for="item in props.items" :key="item" class="flex">
        <div :class="[item.type === 'music' ? 'w-[180px]' : 'w-[320px]']">
          <div
            class="relative flex justify-center items-center"
            :class="[item.type === 'music' ? 'w-[180px]' : 'w-[320px]']"
          >
            <img
              :src="item.image"
              :alt="item.name"
              :class="[item.type === 'video' ? 'rounded-sm' : 'rounded-md']"
            />
            <button
              class="opacity-0 hover:opacity-100 absolute w-full h-full transition-all duration-300 flex justify-center items-center"
              :class="[
                item.type === 'music'
                  ? 'bg-gradient-to-b from-black/70 to-transparent to-40%'
                  : 'bg-ytblack/50',
              ]"
            >
              <IconsSettingsDots
                wrapperElementClassList="w-10 invert-[100%] p-2 top-2 right-2 absolute rounded-full hover:bg-black/10 transition-colors duration-300"
              />
              <IconsPlay
                v-if="item.type === 'music'"
                wrapperElementClassList="absolute bottom-5 right-6 p-[10px] w-11 bg-white/60 rounded-full invert-[100%] transition-all duration-300 transform hover:scale-[115%] hover:bg-white"
              />
            </button>
            <IconsPlay
              v-if="item.type !== 'music'"
              wrapperElementClassList="absolute w-12 invert-[100%] pointer-events-none"
            />
          </div>

          <NuxtLink :to="item.link" class="mt-3 line-clamp-2 hover:underline">{{
            item.name
          }}</NuxtLink>

          <div
            v-if="item.type === 'music'"
            class="flex items-center space-x-1 text-[#B4B4B4] line-clamp-1"
          >
            <div class="min-w-max">
              <IconsExplicit v-if="item?.explicit" />
            </div>
            <p class="min-w-max">{{ item.album }} •</p>
            <NuxtLink
              v-for="artist in item.artists"
              :key="artist"
              :to="artist.link"
              class="hover:underline min-w-max"
              >{{ artist.name
              }}{{
                item.artists.indexOf(artist) !== item.artists.length - 1
                  ? ","
                  : ""
              }}
            </NuxtLink>
          </div>
          <div
            v-else
            class="flex items-center space-x-1 text-[#B4B4B4] line-clamp-1"
          >
            <NuxtLink
              v-for="artist in item.artists"
              :key="artist"
              :to="artist.link"
              class="hover:underline line-clamp-1"
              >{{ artist.name }}
            </NuxtLink>
            <p class="min-w-max">• {{ item.views }} views</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.scrollbarStyle::-webkit-scrollbar,
.scrollbarStyle::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-color: transparent;
}
</style>
