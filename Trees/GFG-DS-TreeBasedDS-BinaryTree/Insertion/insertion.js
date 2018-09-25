class BinaryTree {
  constructor() {
	this.root = null;
  }

  //insert
insert(value) {
  	let newNode = {
		value,
	  	leftNode: null,
	  	rightNode: null,
	}

	if(this.root == null) {
	  this.root = newNode;
	  return;
	}

	let current = this.root;
	
	function BFS(current) {
	  let queue = [];
	  queue.unshift(current);

	  while(queue.length > 0) {
	  	const examineNode = queue.shift();
	  	if(!examineNode.leftNode) {
	  	  examineNode.leftNode = newNode;
	  	  return;
	  	} else if (!examineNode.rightNode) {
	  	  examineNode.rightNode = newNode;
	  	  return;
		} else {
		  queue.push(examineNode.leftNode, examineNode.rightNode);
		}
      }
	}
	BFS(current);
  }
  inOrderTraverse(root){
    if (root) {
 	  this.inOrderTraverse(root.leftNode);
 	  console.log(root.value);
 	  this.inOrderTraverse(root.rightNode);
 	}
  }
  preOrderTraverse(root) {
	if (root) {
	  console.log(root.value);
	  this.preOrderTraverse(root.leftNode);
	  this.preOrderTraverse(root.rightNode);
	}
  }
}

module.exports = BinaryTree;
