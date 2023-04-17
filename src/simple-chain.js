const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  list: [],
  getLength() {
    let res = this.list.length;
    this.list = [];
    return res;
  },
  addLink(value) {
    this.list.push(value)
    return this
  },
  removeLink(position) {
    console.debug(`list =  ${this.list}`)
    if ((typeof position == 'number')&&(position>0)&&(position<=this.list.length)){
      console.debug(`remove id: ${position}`)
      this.list.splice(position-1,1);
    } else {
      console.debug(`exit at position ${position}`)
      this.list = []
      throw new Error ('You can\'t remove incorrect link!')
    }
    return this
  },
  reverseChain() {
    this.list = this.list.reverse();
    return this;
  },
  finishChain() {
    let res = this.list.map((a)=>`( ${String(a)} )`).join(`~~`)
    this.list = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
