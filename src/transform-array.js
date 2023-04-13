const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.debug(arr)
  if (!(arr instanceof Array)){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let res = []
  let status = '';
  for (let i = 0;i<arr.length;i++){
    switch (arr[i]) {
      case '--discard-next':{status='discard';break;}
      case '--discard-prev':{if (res.length>0&&status!='discarded'){res.pop()};break;}
      case '--double-next':{if (i<arr.length-1){status='double'};break;}
      case '--double-prev':{if (i>0&&status!='discarded'){res.push(res[res.length-1])};break;}
      default:{
        if (status=='discard'){
          status='discarded'
          break;
        }else if (status=='double'){
          res.push(arr[i]);
        }
        status=''
        res.push(arr[i]);
      break;}
    }
  }
  return res


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
