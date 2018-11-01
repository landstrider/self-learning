//var bstInsert = require('../../Recurring-Code/BST/bstInsert.js');

var avlNode = require('../../Recurring-Code/BST/avlNode.js');

class AVLTree {
  constructor() {
	this.root = null;
  }

  // A utility function to get the height of the tree
  height(N) {
    if (N == null) return 0;
    return N.nodeHeight;
  }

  // A utility function to right rotate subtree rooted with y 
  rightRotate(y) { 
    var x = y.leftNode; 
    var T2 = x.rightNode; 
    
    // Perform rotation 
    x.rightNode = y; 
    y.leftNode = T2; 
    
    // Update heights 
    y.nodeHeight = Math.max(this.height(y.leftNode), this.height(y.rightNode)) + 1; 
    x.nodeHeight = Math.max(this.height(x.leftNode), this.height(x.rightNode)) + 1; 
    
    // Return new root 
    return x; 
  } 
    
  // A utility function to left rotate subtree rooted with x 
  leftRotate(x) { 
	var y = x.rightNode; 
	var T2 = y.leftNode; 
    
    // Perform rotation 
    y.leftNode = x; 
    x.rightNode = T2; 
    
    //  Update heights 
    x.nodeHeight = Math.max(this.height(x.leftNode), this.height(x.rightNode)) + 1; 
    y.nodeHeight = Math.max(this.height(y.leftNode), this.height(y.rightNode)) + 1; 
    
    // Return new root 
    return y; 
  } 

   getBalance(current) {
     if (!current) return 0;
     return this.height(current.leftNode) - this.height(current.rightNode); 
     
   }

  insert(current, value) {
	/* 1.  Perform the normal BST insertion */
    if (current == null) return avlNode(value); 
  
    if (value < current.value) current.leftNode = this.insert(current.leftNode, value); 
    else if (value > current.value) current.rightNode = this.insert(current.rightNode, value); 
    // Duplicate values not allowed 
    else return current; 
  
    /* 2. Update height of this ancestor current */
    current.nodeHeight = 1 + Math.max(this.height(current.leftNode), 
                          this.height(current.rightNode)); 
  
    /* 3. Get the balance factor of this ancestor 
          current to check whether this current became 
          unbalanced */
   let balance = this.getBalance(current); 
  
    // If this current becomes unbalanced, then there 
    // are 4 cases Lft Left Case 
    if (balance > 1 && value < current.leftNode.value) return this.rightRotate(current); 
  
    // Right Right Case 
    if (balance < -1 && value > current.rightNode.value) return this.leftRotate(current); 
  
    // Left Right Case 
    if (balance > 1 && value > current.leftNode.value) { 
        current.leftNode = this.leftRotate(current.leftNode); 
        return this.rightRotate(current); 
    } 
  
    // Right Left Case 
    if (balance < -1 && value < current.rightNode.value) { 
        current.rightNode = this.rightRotate(current.rightNode); 
        return this.leftRotate(current); 
    } 
  
    /* return the (unchanged) current pointer */
    return current; 
  }
}

module.exports = AVLTree;
