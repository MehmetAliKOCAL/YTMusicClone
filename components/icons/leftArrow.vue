<script setup>
  const props = defineProps({
    color: {
      type: String,
      required: false,
      default: '#aaa',
    },
  });
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :fill="props.color"
  >
    <g>
      <path
        d="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z"
      ></path>
    </g>
  </svg>
</template>
