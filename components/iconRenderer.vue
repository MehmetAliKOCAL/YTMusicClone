<script setup>
import { defineAsyncComponent } from "vue";
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  elementThatBeingHovered: {
    type: String,
    required: false,
    default: "",
  },
});
function dynamicComponent() {
  const iconName = props.iconName;
  return defineAsyncComponent(() =>
    import(`@/components/icons/${iconName}.vue`)
  );
}
</script>
<template>
  <component
    :is="dynamicComponent()"
    :elementThatBeingHovered="props.elementThatBeingHovered"
  />
</template>
