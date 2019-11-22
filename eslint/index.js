// eslint common config

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['jest', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prefer-const': 'warn',
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'react/prop-types': ['warn', { ignore: ['dispatch'] }],
    'react/jsx-no-target-blank': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest', 'testing-library'],
      extends: ['plugin:testing-library/react'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
      },
    },
  ],
};
