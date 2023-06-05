<script setup>
import { useGlobalVariablesStore } from "./store/globalVariables";
import { useWindowScroll } from "@vueuse/core";
const { x, y } = useWindowScroll();
const globalVariables = useGlobalVariablesStore();

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
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
