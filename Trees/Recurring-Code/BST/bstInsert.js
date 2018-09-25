var treeNode = require('./avlNode.js');

class BSTree {
  constructor() {
	this.root = null;
  }

  bstInsert(current, value) {
  	/* 1.  Perform the normal BST insertion */
	if (!current) {return treeNode(value);} 
    
	if (value < current.value) {
	  current.leftNode = this.bstInsert(current.leftNode, value); 
	} else if (value > current.value) current.rightNode = this.bstInsert(current.rightNode, value);
      // Duplicate values not allowed 
      return current; 
  }
}

module.exports = BSTree;
