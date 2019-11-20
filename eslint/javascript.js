// eslint config for javascript
const merge = require("lodash/merge");

const common = require("./index");

module.exports = merge({
  parser: "babel-eslint",
  rules: {
    "react/prop-types": [
      "warn",
      {
        ignore: ["dispatch"]
      }
    ]
  }
}, common);
