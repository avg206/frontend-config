const { mergeWith, isArray } = require('lodash');

const customizer = (objValue, srcValue, key, object, source, stack) => {
  if (isArray(objValue) && stack.size === 0) {
    return objValue.concat(srcValue);
  }
};

const merge = (obj1, obj2) => {
  return mergeWith(obj1, obj2, customizer);
};

module.exports = { merge };
