module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "no-void": "off"
  }
}