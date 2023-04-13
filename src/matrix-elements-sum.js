const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.map((line,li,mtx)=>line.reduce((sum,num,ci)=>{
    return sum + ((li==0||mtx[li-1][ci]!=0)?(num):(0))
  },0)).reduce((a,b)=>a+b)
}

module.exports = {
  getMatrixElementsSum
};
