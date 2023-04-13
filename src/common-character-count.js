const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function objecter(str){
    let obj = {}
    for (let i = 0;i<str.length;i++){
      if (obj[str[i]]){obj[str[i]]++}else{obj[str[i]]=1}
    }
    return obj
  }
  let obj1 = objecter(s1), obj2 = objecter(s2);
  return Object.keys(obj1).map((key)=>Math.min((obj1[key])?(obj1[key]):(0),(obj2[key])?(obj2[key]):(0))).reduce((a,b)=>a+b,0)
}

module.exports = {
  getCommonCharacterCount
};
