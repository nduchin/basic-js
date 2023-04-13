const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix){
  function mooreArr(row,col){
    let res = [];
    [-1,0,1].forEach((dr)=>{
      [-1,0,1].forEach((dc)=>{
        if (dr+row>=0&&dc+col>=0&&dr+row<this.length&&dc+col<this[dr+row].length&&(dr!=0||dc!=0)){
          res.push(this[dr+row][dc+col])
        }
      })
    })
    return res
  }
  return matrix.map((line,li)=>line.map((_,ci)=>mooreArr.call(matrix,li,ci).reduce((a,b)=>a+((b)?(1):(0)),0)))
}

module.exports = {
  minesweeper
};
