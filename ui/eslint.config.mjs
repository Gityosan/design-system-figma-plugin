// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    ignores: ['**/auto-imports.d.ts', '**/components.d.ts'],
  },
  {
    rules: {
      'no-console': 'off',
    },
  }
)
  .override('nuxt/vue/rules', {
    rules: {
      'vue/attribute-hyphenation': 0,
      'vue/require-default-prop': 0,
      'vue/no-mutating-props': 0,
      'vue/require-explicit-emits': 0,
      'vue/no-v-model-argument': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-useless-template-attributes': 0,
      'vue/prop-name-casing': 0,
      'vue/no-multiple-template-root': 0,
      'vue/valid-attribute-name': 0,
      'vue/valid-v-slot': [
        'error',
        {
          allowModifiers: true,
        },
      ],
    },
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/unified-signatures': 'off',
    },
  });
