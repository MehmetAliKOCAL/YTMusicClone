<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
    default: 'dynamically rendered image',
  },
  wrapperElementClassList: {
    type: String,
    required: false,
    default: '',
  },
  imgElementClassList: {
    type: String,
    required: false,
    default: '',
  },
});
</script>
<template>
  <div :class="props.wrapperElementClassList">
    <img
      :src="props.src"
      :alt="props.alt"
      :class="props.imgElementClassList"
    />
  </div>
</template>
