const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;

const { PRIVATE_KEY } = require('./constants');

const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate(PRIVATE_KEY);
const myWalletAddress = myKey.getPublic('hex');

const kuzyaCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
kuzyaCoin.addTransaction(tx1);

kuzyaCoin.minePendingTransactions(myWalletAddress);
console.log('The balance is: ', kuzyaCoin.getBalanceOfAddress(myWalletAddress));

kuzyaCoin.minePendingTransactions(myWalletAddress);
console.log('The balance is: ', kuzyaCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid: ', kuzyaCoin.isChainValid())
