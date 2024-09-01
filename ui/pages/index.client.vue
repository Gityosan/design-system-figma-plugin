<script setup lang="ts">
useHead({ title: 'index' })

const colorInput = ref<string>('')
const errorMessage = ref<string>('')

const generatePalette = () => {
  const colors = colorInput.value.split(/[\s,\t]+/).filter(color => color.trim() !== '')

  // 簡単な検証
  const invalidColors = colors.filter(color => !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color))
  if (invalidColors.length > 0) {
    errorMessage.value = `無効なカラーコード: ${invalidColors.join(', ')}`
    return
  }

  errorMessage.value = ''

  window.postMessage({ pluginMessage: { type: 'generate-palette', colors: colors } }, '*')
}
</script>

<template>
  <div class="p-6 bg-gray-100">
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-4">
        カラーパレットジェネレーター
      </h1>
      <p class="mb-2 text-gray-600">
        カラーコードを入力してください。複数のコードは改行、空白、カンマ、またはタブで区切ってください。
      </p>
      <textarea
        id="colorInput"
        rows="6"
        class="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="#FF0000&#10;#00FF00, #0000FF&#9;#FFFF00"
      />
      <button
        id="generateButton"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="generatePalette"
      >
        生成
      </button>
      <p
        id="errorMessage"
        class="text-red-500 mt-2 hidden"
      />
    </div>
  </div>
</template>
