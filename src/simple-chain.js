const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value !== undefined ? String(value) : ""} )`);
    return this; // цепочка вызовов
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1); // удаляем последний символ
    return this; // цепочка вызовов
  },
  reverseChain() {
    this.chain.reverse();
    return this; // цепочка вызовов
  },
  finishChain() {
    const res = this.chain.join("~~");
    this.chain = [];
    return res; // цепочка вызовов
  },
};

module.exports = {
  chainMaker,
};
