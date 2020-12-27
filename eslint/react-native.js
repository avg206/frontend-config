// eslint config for react native projects
const { merge } = require('../utils')

const base = require('./base');
const baseJavascript = require('./base_javascript');
const baseTypescript = require('./base_typescript');
const baseTests = require('./base_tests');

module.exports = merge(base, {
  plugins: ['module-resolver'],

  rules: {
    'no-console': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-unused-expressions': 'warn',
    'no-redeclare': 'error',
  },

  ignorePatterns: ['node_modules', 'ios', 'android'],

  overrides: [
    // Javascript
    {
      files: ['**/*.{js,jsx}'],
      ...baseJavascript,
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      ...baseTypescript,
    },

    // Tests
    {
      files: ['**/*.{test,spec}.*'],
      ...baseTests,
    },
  ],
});
