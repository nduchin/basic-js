const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let temp = arr.filter((a)=>a!=-1).sort((a,b)=> b-a)
  return arr.map((a)=>(a!=-1)?(temp.pop()):(a))
}

module.exports = {
  sortByHeight
};
