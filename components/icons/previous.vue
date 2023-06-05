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
        <path d="M19,6L9,12l10,6V6L19,6z M7,6H5v12h2V6z"></path>
      </g>
    </svg>
  </div>
</template>
