import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', '.next', 'node_modules'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
)
