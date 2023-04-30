<script setup>
import { useGlobalVariablesStore } from "~/store/globalVariables";
import { useScroll, useElementSize } from "@vueuse/core";
const globalVariables = useGlobalVariablesStore();

const carousel = ref(null);
const carouselWrapper = ref(null);

const { width: carouselWidth } = useElementSize(carousel);
const { width: carouselWrapperWidth } = useElementSize(carouselWrapper);
const { x: carouselScrollValue, arrivedState: isFullyScrolled } = useScroll(
  carousel,
  {
    behavior: "smooth",
  }
);

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
  showMore: {
    type: Boolean,
    required: false,
    defaut: true,
  },
  isCompact: {
    type: Boolean,
    required: false,
    default: false,
  },
});

function getElementPosition(element) {
  if (process.client) {
    const position = {
      inPage: {
        top: element.getBoundingClientRect().top + window.scrollY,
        bottom: element.getBoundingClientRect().bottom + window.scrollY,
        left: element.getBoundingClientRect().left + window.scrollX,
        right: element.getBoundingClientRect().right + window.scrollX,
      },
      inViewport: {
        top: element.getBoundingClientRect().top,
        bottom: element.getBoundingClientRect().bottom,
        left: element.getBoundingClientRect().left,
        right: element.getBoundingClientRect().right,
      },
    };

    return position;
  }
}

function repositionSettingsMenu() {
  if (process.client) {
    const settingsMenu = document.getElementById("songSettingsMenu");
    const settingsButtonPosition = getElementPosition(event.currentTarget);

    if (
      window.innerHeight - settingsButtonPosition.inViewport.bottom >
      settingsMenu.offsetHeight
    ) {
      settingsMenu.style.top = settingsButtonPosition.inPage.bottom + "px";
    } else {
      settingsMenu.style.bottom = 5 + "px";
    }

    if (settingsButtonPosition.inViewport.right > settingsMenu.offsetWidth) {
      settingsMenu.style.left =
        settingsButtonPosition.inViewport.right -
        settingsMenu.offsetWidth +
        "px";
    } else {
      settingsMenu.style.left = settingsButtonPosition.inViewport.left + "px";
    }
  }
}

function resizeSettingsMenu() {
  if (process.client) {
    const settingsMenu = document.getElementById("songSettingsMenu");
    const headerHeight =
      document.getElementsByTagName("header")[0].offsetHeight;

    if (settingsMenu.offsetHeight > window.innerHeight - headerHeight) {
      settingsMenu.style.height = window.innerHeight - headerHeight + "px";
    } else {
      settingsMenu.style.height = "fit-content";
    }
  }
}
</script>

<template>
  <div class="text-white w-full overflow-hidden ytlg:mt-7 yt3xl:mt-9">
    <div ref="carouselWrapper" class="flex items-end justify-between">
      <div class="flex items-center">
        <ClientOnly>
          <NuxtLink
            v-wave="{
              duration: 0.2,
            }"
            v-if="props?.image?.showImage"
            :to="props.image.redirect"
            class="mr-4 rounded-full overflow-hidden"
          >
            <img
              :class="{ 'rounded-full': props?.image?.isRounded }"
              :src="props?.image?.path"
              :alt="props?.image?.alt"
              class="max-w-10 max-h-10 yt2xs:max-w-12 yt2xs:max-h-12 ytlg:max-w-14 ytlg:max-h-14" /></NuxtLink
        ></ClientOnly>
        <div class="flex flex-col max-ytlg:gap-y-1 yt2xl:gap-y-2">
          <h1 class="max-ytxl:text-sm text-[#AAA] uppercase">
            {{ props.subtitle }}
          </h1>
          <NuxtLink
            :to="props.title?.link"
            class="text-[22px] font-bold tracking-wide ytlg:text-2xl ytxl:text-3xl yt2xl:text-[40px]"
            :class="[props.title?.link ? 'hover:underline' : 'cursor-default']"
            >{{ props.title.text }}</NuxtLink
          >
        </div>
      </div>

      <div class="flex gap-x-6 items-end">
        <ClientOnly>
          <button
            v-if="props.showMore"
            v-wave="{
              duration: 0.2,
            }"
            class="py-2 px-4 h-fit border border-white/20 text-sm font-medium rounded-full transition-colors duration-200 hover:bg-white/10"
          >
            More
          </button></ClientOnly
        >
        <div
          v-if="carouselWidth >= carouselWrapperWidth"
          class="flex gap-x-4 items-center max-ytxs:hidden"
        >
          <button @click="carouselScrollValue -= 750">
            <IconsLeftArrow
              color="white"
              class="w-10 p-2 rounded-full border border-white/20 transform transition-all duration-200"
              :class="[
                isFullyScrolled.left
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
                isFullyScrolled.right
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
      v-if="!props.isCompact"
      class="max-w-fit mt-4 ytxl:mt-5 yt2xl:mt-6 max-ytxl:text-sm ytxl:leading-5 font-medium flex gap-x-4 ytlg:gap-x-6 overflow-y-hidden overflow-x-auto scrollbarStyle"
    >
      <div
        v-for="item in props.items"
        :key="item"
        :class="[
          item.type === 'music'
            ? 'w-[160px] ytsm:w-[180px] ytlg:w-[190px] yt2xl:w-[226px]'
            : 'w-[285px] ytsm:w-[320px] ytlg:w-[339px] yt2xl:w-[402px]',
        ]"
      >
        <div class="relative flex justify-center items-center w-inherit">
          <img
            :src="item.image"
            :alt="item.name"
            :class="[item.type === 'video' ? 'rounded-sm' : 'rounded-md']"
          />
          <ClientOnly>
            <div
              class="ytsm:opacity-0 hover:opacity-100 w-full h-full absolute transition-all duration-300"
            >
              <button
                v-wave
                class="w-full h-full"
                :class="[
                  item.type === 'music'
                    ? 'bg-gradient-to-b from-black/70 to-transparent to-40%'
                    : 'bg-ytblack/50',
                ]"
              />
              <IconsSettingsDots
                v-wave="{
                  color: 'black',
                  duration: 0.05,
                }"
                @click="
                  globalVariables.showSongSettings =
                    !globalVariables.showSongSettings;
                  repositionSettingsMenu();
                  resizeSettingsMenu();
                "
                wrapperElementClassList="w-10 invert-[100%] p-2 top-2 right-2 absolute rounded-full hover:bg-black/10 transition-colors duration-200 border border-transparent active:border-[#393939] cursor-pointer"
              />
              <IconsPlay
                v-wave="{
                  color: 'black',
                  duration: 0.2,
                }"
                v-if="item.type === 'music'"
                wrapperElementClassList="absolute bottom-5 right-6 p-[10px] w-11 bg-white/60 rounded-full invert-[100%] transition-all duration-300 transform hover:scale-[115%] hover:bg-white cursor-pointer"
              />
            </div>
            <IconsPlay
              v-if="item.type !== 'music'"
              wrapperElementClassList="absolute w-12 invert-[100%] pointer-events-none"
          /></ClientOnly>
        </div>

        <NuxtLink
          :to="item.link"
          class="mt-3 line-clamp-2 hover:underline ytxl:mb-[2px]"
          >{{ item.name }}</NuxtLink
        >

        <div class="flex space-x-1 text-[#B4B4B4]">
          <IconsExplicit v-if="item?.explicit" />
          <div class="w-full truncate space-x-1">
            <p v-if="item?.album" class="min-w-max inline">
              {{ item.album }} •
            </p>
            <NuxtLink
              v-for="artist in item.artists"
              :key="artist"
              :to="artist.link"
              class="hover:underline min-w-max"
              >{{
                artist.name +
                (item.artists.indexOf(artist) !== item.artists.length - 1
                  ? ","
                  : "")
              }}
            </NuxtLink>
            <p v-if="item?.views" class="min-w-max inline">
              • {{ item.views }} views
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="max-w-fit mt-4 ytxl:mt-5 yt2xl:mt-6 max-ytxl:text-sm ytxl:leading-5 font-medium flex flex-wrap overflow-y-hidden overflow-x-auto scrollbarStyle gap-x-6 gap-y-4"
    >
      <div
        v-for="item in props.items"
        :key="item"
        class="w-[460px] mr-8 relative"
      >
        <div class="flex items-center">
          <img
            :src="item.image"
            :alt="item.name"
            class="w-12 h-12 mr-4 rounded-sm object-cover object-center"
          />

          <div class="top-0 flex w-full h-full absolute items-center">
            <IconsPlay
              :wrapperElementClassList="'w-12 p-3 bg-white/70 invert-[100%]'"
            />
          </div>

          <div class="flex w-full relative">
            <div class="max-w-[396px]">
              <p class="truncate">{{ item.name }}</p>
              <div class="flex space-x-1 text-[#B4B4B4]">
                <IconsExplicit v-if="item?.explicit" />
                <div class="truncate space-x-1">
                  <NuxtLink
                    v-for="artist in item.artists"
                    :key="artist.name"
                    :to="artist.link"
                    class="hover:underline min-w-max"
                    >{{
                      artist.name +
                      (item.artists.indexOf(artist) !== item.artists.length - 1
                        ? ","
                        : "")
                    }}
                  </NuxtLink>
                  <p class="min-w-max inline">•</p>
                  <p
                    v-if="
                      item?.album?.toLowerCase() === 'single' ||
                      item?.album?.toLowerCase() === 'song'
                    "
                    class="min-w-max inline"
                  >
                    {{ item.name }}
                  </p>
                  <p v-else-if="item?.album" class="min-w-max inline">
                    {{ item.album }}
                  </p>
                  <p v-else class="min-w-max inline">{{ item.views }} views</p>
                </div>
              </div>
            </div>
            <div>aosdsd</div>
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
