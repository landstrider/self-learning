var inorder = require('../../Recurring-Code/Traversal/inorder.js');
var preorder = require('../../Recurring-Code/Traversal/preorder.js');

var AVLTree = require('./avlInsert.js');

var BSTree = require('../../Recurring-Code/BST/bstInsert.js');

var bsTree = new BSTree;

bsTree.root = bsTree.bstInsert(bsTree.root, 4);
bsTree.root = bsTree.bstInsert(bsTree.root, 2);
bsTree.root = bsTree.bstInsert(bsTree.root, 8);
bsTree.root = bsTree.bstInsert(bsTree.root, 5);
bsTree.root = bsTree.bstInsert(bsTree.root, 3);
bsTree.root = bsTree.bstInsert(bsTree.root, 7);
bsTree.root = bsTree.bstInsert(bsTree.root, 1);
bsTree.root = bsTree.bstInsert(bsTree.root, 9);
bsTree.root = bsTree.bstInsert(bsTree.root, 14);
bsTree.root = bsTree.bstInsert(bsTree.root, 11);
bsTree.root = bsTree.bstInsert(bsTree.root, 31);
bsTree.root = bsTree.bstInsert(bsTree.root, 12);
bsTree.root = bsTree.bstInsert(bsTree.root, 10);

preorder(bsTree.root);
console.log("\n");
var avlTree = new AVLTree;

avlTree.root = avlTree.insert(avlTree.root, 4);
avlTree.root = avlTree.insert(avlTree.root, 2);
avlTree.root = avlTree.insert(avlTree.root, 8);
avlTree.root = avlTree.insert(avlTree.root, 5);
avlTree.root = avlTree.insert(avlTree.root, 3);
avlTree.root = avlTree.insert(avlTree.root, 7);
avlTree.root = avlTree.insert(avlTree.root, 1);
avlTree.root = avlTree.insert(avlTree.root, 9);
avlTree.root = avlTree.insert(avlTree.root, 14);
avlTree.root = avlTree.insert(avlTree.root, 11);
avlTree.root = avlTree.insert(avlTree.root, 31);
avlTree.root = avlTree.insert(avlTree.root, 12);
avlTree.root = avlTree.insert(avlTree.root, 10);

preorder(avlTree.root);
