// eslint config for web based projects

module.exports = {
  plugins: ['react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'prefer-const': 'warn',
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'react/prop-types': 0,
    'react/jsx-no-target-blank': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
