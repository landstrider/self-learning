var treeNode = require('../../Recurring-Code/BST/avlNode.js');

class continuousTree {
  constructor(treeRoot) {
	this.root = treeRoot;
  }

  isContinuous(current) {
	if (current.value !== this.root.value && Math.abs(current.value - prevNode.value) > 1) {
	  return false;
	}
	let prevNode = treeNode(current.value);
	this.isContinuous(current.leftNode);
	this.isContinuous(current.rightNode);
  }
}

module.exports = continuousTree;
