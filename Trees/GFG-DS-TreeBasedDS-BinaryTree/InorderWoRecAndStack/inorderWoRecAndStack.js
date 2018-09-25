function _inorder(treeRoot) {
  let current = treeRoot;

  while (current) {
	if (!current.leftNode) {
	  console.log(current.value);
	  current = current.rightNode;
	} else {
	  //Find the inorder predecessor of current
	  pre = current.leftNode;

	  while (!pre.rightNode && pre.rightNode != current) {
		pre = pre.rightNode;
	  }
	  // Make current as right child of its inorder predecessor	
	  if (!pre.rightNode) {
		pre.rightNode =  current;
		current = current.leftNode;
	  } else {
	  // Revert the changes made in if part to restore the  
	  // original tree i.e., fix the right child of predecssor 
		pre.rightNode = null;
		console.log(current.value);
		current = current.rightNode;
	  }
	}
  }
}

module.exports = _inorder;
