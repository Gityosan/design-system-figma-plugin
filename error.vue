<script setup>
defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h1>{{ error?.statusCode }}：{{ error?.message }}</h1>
    <button @click="handleError">
      Clear errors
    </button>
  </div>
</template>
