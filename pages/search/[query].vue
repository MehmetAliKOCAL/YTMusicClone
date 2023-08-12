<script setup>
  import { useGlobalVariablesStore } from '~/store/globalVariables';
  const globalVariables = useGlobalVariablesStore();
  const elementBeingHovered = ref(null);
  const query = useRoute().params.query;
  let tabSelected = ref(0);
  let searchResult = ref(await $fetch(`/api/search?searchQuery=${query}&limit=20`));

  function playSong(image, title, explicit, artists, id) {
    globalVariables.$patch({
      currentlyPlayingSong: {
        image: image,
        title: title,
        explicit: explicit,
        artists: artists,
        id: id,
      },
    });
  }

  const categories = [
    {
      name: 'Featured playlists',
      link: '/',
    },
    {
      name: 'Songs',
      link: '/',
    },
    {
      name: 'Vides',
      link: '/',
    },
    {
      name: 'Artists',
      link: '/',
    },
    {
      name: 'Community playlists',
      link: '/',
    },
    {
      name: 'Albums',
      link: '/',
    },
  ];

  const tabs = [{ text: 'YT MUSIC' }, { text: 'LIBRARY' }];
</script>
<template>
  <main class="mx-auto max-w-[850px]">
    <div class="flex text-white text-sm font-bold space-x-8 border-b border-white/10">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="tabSelected = tabs.indexOf(tab)"
        class="pb-3.5 border-b-2 transition-colors duration-300"
        :class="[
          tabSelected === tabs.indexOf(tab)
            ? 'text-white border-white'
            : 'text-white/40 border-transparent',
        ]"
      >
        {{ tab.text }}
      </button>
    </div>
    <div v-if="tabSelected === 0">
      <Categories
        :categories="categories"
        class="my-1.5"
      />
      <h1 class="text-white font-black text-2xl mb-4">Top result</h1>
      <div
        class="text-white"
        v-for="result in searchResult?.items"
        :key="result"
      >
        <div
          v-if="result === searchResult?.items[0]"
          class="overflow-hidden rounded-md relative h-32"
        >
          <div
            :style="'background-image:url(' + result?.bestThumbnail?.url + ');'"
            class="bg-center bg-[length:200%] filter blur-3xl h-32 bg-red-900"
          />
          <div
            class="z-10 top-0 left-4 h-full flex absolute justify-center items-center text-white space-x-5"
          >
            <div
              @mouseenter="elementBeingHovered = result"
              @mouseleave="elementBeingHovered = null"
              @click="
                playSong(
                  result?.bestThumbnail?.url,
                  result?.title,
                  false,
                  [{ name: result?.author?.name, link: '/' }],
                  result?.id
                )
              "
              class="w-[100px] relative cursor-pointer rounded-[4px] overflow-hidden"
            >
              <img
                :src="result?.bestThumbnail?.url"
                :alt="result?.title"
                class="w-[100px] h-[100px] object-cover object-center"
              />
              <div
                class="z-10 top-0 w-full h-full absolute flex justify-center items-center bg-black/70 transition-all duration-200"
                :class="[
                  elementBeingHovered === result ? 'opacity-100 visible' : 'opacity-0 invisible',
                ]"
              >
                <IconsPlay wrapperElementClassList="w-8" />
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-2xl font-bold truncate">{{ result?.title }}</p>
              <div class="flex space-x-1 text-white/70">
                <p class="truncate">
                  {{ `${result?.type.capitalize()} • ` }}
                </p>
                <p class="hover:underline cursor-pointer">
                  {{ result?.author?.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="result !== searchResult?.items[0]"
          class="mt-96"
        >
          <p>{{ result?.type }}</p>
          <p>{{ result?.title }}</p>
          <p>{{ result?.id }}</p>
          <p>url: {{ result?.url }}</p>
          <p>author: {{ result?.author?.name }}</p>
          <img
            :src="result?.author?.bestAvatar?.url"
            alt=""
          />
          <img
            :src="result?.bestThumbnail?.url"
            :alt="result?.title"
          />
        </div>
      </div>
    </div>
    <div
      v-else
      class="mt-4 flex flex-col justify-center items-center space-y-4"
    >
      <div class="w-24">
        <IconsSearch />
      </div>
      <p class="text-white/50 text-xl">No results found</p>
    </div>
  </main>
</template>
