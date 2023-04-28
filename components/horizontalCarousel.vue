<script setup>
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
  <div class="text-white w-full">
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
        <h1 class="text-[14px] text-[#AAA] uppercase cursor-default">
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
    <div class="mt-4">
      <div v-for="item in props.items" :key="item">
        <div class="flex relative w-fit h-[180px]">
          <img
            :src="item.image"
            :alt="item.name"
            class="h-[180px]"
            :class="[item.type === 'video' ? 'rounded-sm' : 'rounded-md']"
          />
          <div
            class="absolute w-full h-full hover:bg-ytblack/50 transition-all duration-300 flex justify-center items-center"
          >
            <IconsPlay wrapperElementClassList="w-12 invert-[100%]" />
          </div>
        </div>
        <p class="mt-3">{{ item.name }}</p>
        <div
          v-if="item.type === 'music'"
          class="flex items-center space-x-1 max-w-10"
        >
          <IconsExplicit v-if="item?.explicit" />
          <p>{{ item.album }} •</p>
          <NuxtLink
            v-for="artist in item.artists"
            :key="artist"
            :to="artist.link"
            class="hover:underline"
            >{{ artist.name
            }}{{
              item.artists.indexOf(artist) !== item.artists.length - 1
                ? ","
                : ""
            }}
          </NuxtLink>
        </div>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>
