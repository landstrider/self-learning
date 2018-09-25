function inorder(current) {
  if (current)	{
	//TLS
	inorder(current.leftNode);
	//Log
	console.log(current.value);
	//TRS
	//inorder(current.right);
	inorder(current.rightNode);
  }
}

module.exports = inorder;
