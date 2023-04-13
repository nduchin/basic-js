const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return Math.max.apply(null,Array(String(n).length).fill(String(n)).map((a,i)=>Number(a.slice(0,i)+a.slice(i+1))))
}

module.exports = {
  deleteDigit
};
