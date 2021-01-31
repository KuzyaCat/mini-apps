const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
  }

  createGenesisBlock() {
    return new Block(0, '01/01/2020', 'Genesis block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    console.log(this.getLatestBlock());
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

const kuzyaCoin = new Blockchain();
kuzyaCoin.addBlock(new Block(1, '10.07.2020'), { amount: 4 });
kuzyaCoin.addBlock(new Block(2, '12.07.2020'), { amount: 10 });

console.log(JSON.stringify(kuzyaCoin, null, 2));
