function _inorder(treeRoot) {
  let current = treeRoot;

  let nodeStack = [];

  while (true) {
	  //Push the current node to Stack and set current = current->left until current is NULL
	if (current) {
	  nodeStack.push(current);
	  current = current.leftNode;
	}
	//If current is NULL and stack is not empty then 
	//a) Pop the top item from stack.
	//b) Print the popped item, set current = popped_item->right 
	//c) Begin while loop again.
	if(!current && nodeStack.length) {
	  let examineNode = nodeStack.pop();
	  console.log(examineNode.value);
	  current = examineNode.rightNode;
	}
	//Terminate if current is NULL and stack is empty
	if (!current && !nodeStack.length) {
	  break;
	}
  }
}

module.exports = _inorder;
