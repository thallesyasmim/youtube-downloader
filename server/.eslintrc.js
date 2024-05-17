module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
    'jest/globals': true
  },
  extends: ['standard', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['simple-import-sort', 'import', 'jest', '@typescript-eslint'],
  rules: {
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    'no-useless-constructor': 'off',
    indent: 'off',
    'brace-style': 'off',
    'no-use-before-define': 'off'
  }
}
