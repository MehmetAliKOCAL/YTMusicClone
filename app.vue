<script setup>
  import { useGlobalVariablesStore } from './store/globalVariables';
  import { useWindowScroll } from '@vueuse/core';
  const { x, y } = useWindowScroll();
  const globalVariables = useGlobalVariablesStore();
  let pageTitle = ref('');

  watch(x, () => {
    globalVariables.$patch({
      ScrollValueX: x.value,
    });
  });

  watch(y, () => {
    globalVariables.$patch({
      ScrollValueY: y.value,
    });
  });

  onMounted(() => {
    globalVariables.$patch({
      ScrollValueX: x.value,
      ScrollValueY: y.value,
    });
  });

  globalVariables.$subscribe((mutation, state) => {
    if (state.currentlyPlayingSong.hasOwnProperty('title')) {
      pageTitle.value = state.currentlyPlayingSong.title;
    }
  });
</script>
<template>
  <NuxtLayout>
    <Title>{{
      pageTitle === '' ? 'YouTube Music' : pageTitle + ' - YouTube Music'
    }}</Title>
    <NuxtPage />
  </NuxtLayout>
</template>
