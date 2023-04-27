<script setup>
const categories = [
  {
    name: "Energize",
    link: "/",
  },
  {
    name: "Relax",
    link: "/",
  },
  {
    name: "Workout",
    link: "/",
  },
  {
    name: "Focus",
    link: "/",
  },
  {
    name: "Commute",
    link: "/",
  },
];
</script>

<template>
  <div class="flex gap-3 py-4 overflow-x-auto categoriesScrollbar">
    <NuxtLink
      v-for="category in categories"
      :key="category.name"
      :to="category.link"
      class="rounded-lg bg-white/10 hover:bg-white/20 focus:bg-white/30 transition-colors duration-200 text-white text-sm px-3 py-2"
    >
      {{ category.name }}
    </NuxtLink>
  </div>
</template>
