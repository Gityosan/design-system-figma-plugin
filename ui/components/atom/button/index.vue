<script setup lang="ts">
import { computed } from 'vue'
import { buttonStyle, styles, type ButtonStyleVariants } from './index.css'
import { textStyle } from '@/assets/styles'

const props = withDefaults(defineProps<{
  tag?: string
  variant?: ButtonStyleVariants['variant']
  size?: ButtonStyleVariants['size']
  prependIcon?: string
  appendIcon?: string
  loading?: boolean
}>(), {
  tag: 'button',
  variant: 'primary',
  size: 'large',
  loading: false
})

const buttonClassName = computed(() => buttonStyle({ variant: props.variant, size: props.size }))

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <component
    :is="tag"
    :disabled="loading"
    :aria-disabled="loading"
    :class="buttonClassName"
    @click="$emit('click', $event)"
  >
    <template v-if="loading">
      <Icon
        name="line-md:loading-twotone-loop"
        :class="styles.loadingIcon"
      />
    </template>
    <template v-else>
      <Icon
        v-if="prependIcon"
        :name="prependIcon"
        :class="textStyle({ variant: 'button_icon' })"
      />
      <span :class="styles.content">
        <slot />
      </span>
      <Icon
        v-if="appendIcon"
        :name="appendIcon"
        :class="textStyle({ variant: 'button_icon' })"
      />
    </template>
  </component>
</template>
