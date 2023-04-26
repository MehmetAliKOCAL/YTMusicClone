<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
    default: "dynamically rendered image",
  },
  wrapperClassList: {
    type: String,
    required: false,
    default: "",
  },
  imgClassList: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
<template>
  <div :class="props.wrapperClassList">
    <img :src="props.src" :alt="props.alt" :class="props.imgClassList" />
  </div>
</template>
