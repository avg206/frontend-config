// eslint config for typescript
const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: path.resolve(process.cwd(), 'tsconfig.json'),
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
  },
};
