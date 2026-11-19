import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

/**
 * Yalnız gerçek hataları yakalayan dar kural seti (biçim denetimi yok): tanımsız değişken,
 * kullanılmayan import, şablonda hatalı yönerge. API adlandırması `check-api-consistency` ile denetlenir.
 */
export default [
  { ignores: ['dist/**', 'types/**', 'themes/**', 'node_modules/**'] },
  ...pluginVue.configs['flat/essential'],
  {
    files: ['src/**/*.{js,vue}', 'tests/**/*.js', 'scripts/**/*.{js,mjs}', '*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', varsIgnorePattern: '^_' }],
      'no-dupe-keys': 'error',
      'no-unreachable': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
]
