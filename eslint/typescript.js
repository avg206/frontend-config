// eslint config for typescript
const path = require("path");
const merge = require("lodash/merge");

const common = require("./index");

module.exports = merge({
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: path.resolve(process.cwd(), "tsconfig.json")
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0
  }
}, common);
