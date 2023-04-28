<script setup>
const props = defineProps({
  wrapperElementClassList: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div :class="props.wrapperElementClassList">
    <svg viewBox="0 0 24 24">
      <g>
        <path d="M6,4l12,8L6,20V4z" />
      </g>
    </svg>
  </div>
</template>
