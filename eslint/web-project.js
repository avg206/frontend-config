// eslint config for web based projects
const { merge } = require('../utils')

const base = require('./base');
const baseJavascript = require('./base_javascript');
const baseTypescript = require('./base_typescript');
const baseTests = require('./base_tests');

module.exports = merge(base, {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

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
