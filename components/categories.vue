<script setup>
import { useScroll } from "@vueuse/core";
const componentWrapper = ref(null);
const { isScrolling } = useScroll(componentWrapper);

const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: [],
  },
});

function hideInactiveScrollbar() {
  componentWrapper.value.classList.replace("hideScrollbar", "showScrollbar");

  setTimeout(() => {
    if (isScrolling !== false) {
      componentWrapper.value.classList.replace(
        "showScrollbar",
        "hideScrollbar"
      );
    }
  }, 500);
}
</script>

<template>
  <div class="rounded-bl-md overflow-hidden">
    <div
      @scroll="hideInactiveScrollbar()"
      ref="componentWrapper"
      class="flex gap-3 py-4 overflow-x-auto transition-all scrollbarStyle showScrollbar"
    >
      <NuxtLink
        v-for="category in props.categories"
        :key="category.name"
        :to="category.link"
        class="py-2 px-3 rounded-lg text-sm bg-white/10 text-white hover:bg-white/20 focus:bg-white/30 transition-colors duration-200"
      >
        {{ category.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.showScrollbar {
  border-color: rgba(255, 255, 255, 0.2);
  transition-duration: 0ms;
}

.hideScrollbar {
  border-color: rgba(255, 255, 255, 0);
  transition-duration: 500ms;
}

.scrollbarStyle::-webkit-scrollbar {
  height: 3px;
  background-color: transparent;
}

.scrollbarStyle::-webkit-scrollbar-thumb {
  border-color: inherit;
  border-right-style: inset;
  border-right-width: 100vw;
  background-color: transparent;
}
</style>
