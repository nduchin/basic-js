const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return Math.max.apply(null,arr.map((a)=>{
      if (a instanceof Array){
        if (a.length==0){
          return 2
        }else{
          return this.calculateDepth(a)+1
        }
      }else{
        return 1
      }
    }))
  };
}

module.exports = {
  DepthCalculator
};
