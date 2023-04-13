const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domStat = {}
  domains
    .map((a)=>a
    .split('.')
    .reverse()
    .map((b)=>'.'+b))
    .forEach((a)=>{
      Array.from(a,(_,i)=>a
        .slice(0,i+1)
        .join(''))
        .forEach((b)=>{
          if(!domStat[b]){domStat[b]=1}else{domStat[b]++}
        })
    })
  console.debug(domStat)
  return domStat
}

module.exports = {
  getDNSStats
};
