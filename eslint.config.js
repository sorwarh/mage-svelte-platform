import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'

export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    }
  }
]