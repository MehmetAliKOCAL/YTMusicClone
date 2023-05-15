<script setup>
const query = useRoute().params.query;
let searchResult = ref(await $fetch(`/api/search/${query}`));
</script>
<template>
  <div>
    <p class="text-white mb-10">search query: {{ query }}</p>
    <div class="text-white" v-for="result in searchResult?.items">
      <p>{{ result?.title }}</p>
      <p>{{ result?.id }}</p>
      <p>url: {{ result?.url }}</p>
      <p>author: {{ result?.author?.name }}</p>
      <img :src="result?.author?.bestAvatar?.url" alt="" />
      <img :src="result?.bestThumbnail?.url" :alt="result?.title" />
    </div>
  </div>
</template>
