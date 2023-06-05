<script setup>
const props = defineProps({
  wrapperElementClassList: {
    type: String,
    required: false,
    default: "",
  },
  color: {
    type: String,
    required: false,
    default: "#aaa",
  },
});
</script>
<template>
  <div :class="props?.wrapperElementClassList">
    <svg viewBox="0 0 24 24" :fill="props.color">
      <g>
        <path d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z"></path>
      </g>
    </svg>
  </div>
</template>
