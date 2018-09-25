var BinTree = require('../Insertion/do_something.js');
var Deletion = require('./deletion.js');

console.log(BinTree);

BinTree.inOrderTraverse(BinTree.root);

var remove = new Deletion(BinTree.root);

remove.delete(5);

console.log("\n");

BinTree.inOrderTraverse(BinTree.root);
