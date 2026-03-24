module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte/svelte'
    }
  ]
};