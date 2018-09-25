function preorder(current) {
  if (current)	{
	//Log
	console.log(current.value);
	//TLS
	preorder(current.leftNode);
	//TRS
	preorder(current.rightNode);
  }
}

module.exports = preorder;
