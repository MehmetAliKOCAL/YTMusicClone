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
    <svg viewBox="0 0 24 24" :fill="props?.color">
      <g height="24" viewBox="0 0 24 24" width="24">
        <path d="M9,19H7V5H9ZM17,5H15V19h2Z"></path>
      </g>
    </svg>
  </div>
</template>
