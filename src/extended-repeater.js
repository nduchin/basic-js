const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addArr = []
  if (options&&options.hasOwnProperty('addition')){
    addArr = [String(options.addition)]
    if (options.additionRepeatTimes>1){
      addArr = Array.from({length: options.additionRepeatTimes},()=>String(options.addition) )
    }
  }
  let strArr = [String(str)]
  if (options.repeatTimes>1){
    strArr = Array.from({length: options.repeatTimes},()=>String(str))
  }
  return strArr.map((a)=>a+addArr.join((options.additionSeparator)?(options.additionSeparator):('|'))).join((options.separator)?(options.separator):('+'))
}

module.exports = {
  repeater
};
