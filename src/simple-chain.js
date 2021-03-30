const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('Wrong position');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.chain.length; i++) {
      result = `${result}( ${this.chain[i]} )`;
      if (this.chain[i + 1] !== undefined) {
        result = `${result}~~`;
      }
    }
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
