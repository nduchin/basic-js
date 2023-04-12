const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  console.debug(date)
  if (!date){
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date)||date.toString() == Date.prototype.toString.call(new Date())){
    console.debug('error found')
    throw new Error('Invalid date!')
  }
  return ['winter','spring','summer','autumn','winter'][Math.floor((date.getMonth()+1)/3)]
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
