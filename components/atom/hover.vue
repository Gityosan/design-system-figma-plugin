<script setup lang="ts">
const isHovering = ref<boolean>(false)
</script>

<template>
  <div
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <slot
      :isHovering="isHovering"
    />
  </div>
</template>
