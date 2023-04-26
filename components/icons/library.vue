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
      class="transition-all duration-200 filter hover:invert"
      :class="[
        useRoute().path == '/library' ? 'invert-[100%]' : 'invert-[50%]',
      ]"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="M16,6v2h-2v5c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.37,0,0.7,0.11,1,0.28V6H16z M18,20H4V6H3v15h15V20z M21,3H6v15h15V3z M7,4h13v13H7V4z"
        ></path>
      </g>
    </svg>
  </div>
</template>
