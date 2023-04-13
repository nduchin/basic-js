const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(){
    this.direction=(arguments.length>0)?(arguments[0]):(true)
  }
  encrypt(message,key) {
    if (!arguments||!arguments[0]||!arguments[1]){
      throw new Error('Incorrect arguments!')
    }
    let keyId = 0;
    return message
      .toUpperCase()
      .split('')
      .map((char)=>{
        let code = char.charCodeAt(0)-65;
        if (code>=0&&code<=26){
          return String.fromCharCode((code+(key.toUpperCase().charCodeAt((keyId++)%key.length)-65))%26+65)
        }else{
          return char
        }
      })[(this.direction)?('slice'):('reverse')]().join('')
  }
  decrypt(message,key) {
    if (!arguments||!arguments[0]||!arguments[1]){
      throw new Error('Incorrect arguments!')
    }
    let keyId = 0
    return message
      .toUpperCase()
      .split('')
      .map((char)=>{
        let code = char.charCodeAt(0)-65;
        if (code>=0&&code<26){
          return String.fromCharCode((26+code-(key.toUpperCase().charCodeAt((keyId++)%key.length)-65))%26+65)
        }else{
          return char
        }
      })[(this.direction)?('slice'):('reverse')]().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
