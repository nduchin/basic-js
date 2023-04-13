const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str||str.length<1){return ''}
  return str.match(/(.)\1{0,}/g).map((a)=>(a.length>1)?(a.length+a[0]):(a[0])).join('')
}

module.exports = {
  encodeLine
};
