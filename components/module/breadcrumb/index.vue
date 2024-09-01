<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'nuxt/app'
import { styles } from './index.css'
import { breadcrumbMaster } from '@/assets/constant'

const { path } = useRoute()
const breadcrumbs = computed(() => {
  const pathVariations = path
    .split('/')
    .filter(v => !!v)
    .reduce<string[]>(
      (a, c, i) => [...a, i ? `${a[i]}/${c}` : `/${c}`],
      ['/']
    )

  return pathVariations.reduce<{ name: string, path: string }[]>((acc, v) => {
    const match = breadcrumbMaster.find(item => item.regExp.test(v))
    if (match) acc.push({ name: match.value, path: v })
    return acc
  }, [])
})
</script>

<template>
  <div :class="styles.container">
    <template
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="breadcrumb.name"
    >
      <AtomLinkText
        variant="label_l"
        :to="breadcrumb.path"
        :aria-disabled="index === breadcrumbs.length - 1"
      >
        <template v-if="!index">
          <Icon
            name="material-symbols:home"
            size="12"
            :class="styles.homeIcon"
          />
        </template>
        <span>{{ breadcrumb.name }}</span>
      </AtomLinkText>
      <template v-if="index !== breadcrumbs.length - 1">
        <Icon
          name="mingcute:right-line"
          size="12"
        />
      </template>
    </template>
  </div>
</template>
