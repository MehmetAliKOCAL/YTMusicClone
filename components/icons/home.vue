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
      id="home"
      class="transition-all duration-200 filter invert-[50%] hover:invert"
      :class="{ 'invert-[100%]': useRoute().path === '/' }"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"
        ></path>
      </g>
    </svg>
  </div>
</template>
