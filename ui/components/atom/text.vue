<script setup lang="ts">
import { computed } from 'vue'
import type { TextStyleVariants } from '@/assets/styles/typography.css'
import { textStyle } from '@/assets/styles/typography.css'

const props = withDefaults(defineProps<{
  variant?: TextStyleVariants['variant']
  tag?: string
  text?: string
}>(), {
  variant: 'body_l',
  tag: 'p',
  text: ''
})

const className = computed(() => textStyle({ variant: props.variant }))
</script>

<template>
  <component
    :is="tag"
    :class="className"
  >
    {{ text }} <slot />
  </component>
</template>
