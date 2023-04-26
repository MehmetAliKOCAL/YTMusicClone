<script setup>
const props = defineProps({
  elementThatBeingHovered: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <div class="w-6">
    <svg
      class="transition-all duration-200 filter invert-[50%] hover:invert"
      :class="{ 'invert-[100%]': useRoute().path === '/upgrade' }"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
        ></path>
      </g>
    </svg>
  </div>
</template>
