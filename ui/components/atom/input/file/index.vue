<script setup lang="ts">
import { styles } from './index.css'

const props = withDefaults(defineProps<{ modelValue: File | null }>(), { modelValue: null })
const emit = defineEmits<{ (e: 'update:model-value', value: File | null): void }>()
const files = ref<File[]>([])
const imageURL = computed<string>(() => typeSafetyFileUrl(props.modelValue))
const isDropOvering = ref<boolean>(false)
const resetFile = () => {
  files.value = []
  emit('update:model-value', null)
}
const emitFile = () => {
  if (!files.value.length) return
  emit('update:model-value', files.value[0])
}
const onFilePicked = (e: Event) => {
  const pickedFiles = (e.target as HTMLInputElement)?.files
  if (!pickedFiles) return
  if (Array.from(pickedFiles).some(v => v.size >= 5 * 1024 * 1024)) {
    alert('アップロード可能な画像サイズは5MBまでです')
    return
  }
  if (pickedFiles) files.value = [...pickedFiles]
  emitFile()
}
const onDrop = (e: DragEvent) => {
  if (!e.dataTransfer?.files) return
  files.value = [...e.dataTransfer.files]
  emitFile()
  isDropOvering.value = false
}
const onDragOver = (e: DragEvent) => {
  isDropOvering.value = true
}
const onDragLeave = (e: DragEvent) => {
  isDropOvering.value = false
}
</script>

<template>
  <div :class="styles.container">
    <v-img
      v-if="imageURL"
      :src="imageURL"
      :aspect-ratio="16 / 9"
      :class="styles.image"
    />
    <v-hover v-slot="{ isHovering, props: hover }">
      <div
        :class="[
          styles.dropZone,
          isDropOvering && styles.dropZoneVariants.active,
          imageURL && isHovering && styles.dropZoneVariants.hover,
          imageURL && !isHovering && styles.dropZoneVariants.hidden
        ]"
        v-bind="hover"
        @drop.stop.prevent="onDrop"
        @dragover.stop.prevent="onDragOver"
        @dragleave.stop.prevent="onDragLeave"
      >
        <atom-text
          variant="body_l"
          :class="[
            imageURL || isDropOvering ? styles.textVariants.white : styles.textVariants.grey
          ]"
        >
          ここにドラッグ&ドロップ
        </atom-text>
        <atom-text
          variant="body_l"
          :class="[
            imageURL || isDropOvering ? styles.textVariants.white : styles.textVariants.grey
          ]"
        >
          または
        </atom-text>
        <atom-button
          v-if="imageURL"
          variant="secondary"
          size="small"
          prepend-icon="mdi-close"
          @click="resetFile"
        >
          {{ `リセット（ ${modelValue?.name || ''} ）` }}
        </atom-button>
        <label
          v-else
        >
          <atom-button
            tag="div"
            variant="secondary"
            size="small"
            prepend-icon="mdi-folder-open"
          >
            {{ 'ファイルを選択' }}
          </atom-button>
          <input
            type="file"
            accept="image/png, image/jpeg, image/gif"
            :class="styles.fileInput"
            @input="onFilePicked"
          >
        </label>
      </div>
    </v-hover>
  </div>
</template>
