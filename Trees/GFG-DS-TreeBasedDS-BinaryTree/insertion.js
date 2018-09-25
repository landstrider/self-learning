class BinaryTree {
  constructor() {
	this.root = null;
	var insertPosition;
  }

  //insert
  insert() {
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

	inOrder(root) {
	  if(root) {
		this.inOrder(root.left);
		this.inOrder(root.right);
	  } else {
		return insertPosition = root; 
	  } 
	}
  }
}
