// eslint config for test files

module.exports = {
  env: {
    jest: true,
    'jest/globals': true,
  },
  plugins: ['jest', 'testing-library'],
  extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
  },
};
