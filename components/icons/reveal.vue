<script setup>
  const props = defineProps({
    color: {
      type: String,
      required: false,
      default: '#fff',
    },
    wrapperElementClassList: {
      type: String,
      required: false,
      default: '',
    },
  });
</script>

<template>
  <div :class="props.wrapperElementClassList">
    <svg
      viewBox="0 0 24 24"
      :fill="props.color"
    >
      <g>
        <path d="M18,9l-6,6L6,9H18z"></path>
      </g>
    </svg>
  </div>
</template>
