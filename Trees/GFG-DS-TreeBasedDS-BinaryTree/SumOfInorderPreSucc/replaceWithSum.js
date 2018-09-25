class SumOfInPreSucc {

  constructor(treeRoot) {
	this.root = treeRoot;
	this.replaceWithSum();
  }

  createInOrder(current, inorderArr) {
    if (current) {
	  //Traverse left subtree
	  this.createInOrder(current.leftNode, inorderArr);

	  //Store current node value
	  inorderArr.arr[inorderArr.arrIndex++] = current.value;

	  //Traverse left subtree
	  this.createInOrder(current.rightNode, inorderArr); 
    }
  }

  replaceInorder(current, inorderArr, replaceIndex) {
	if (current) {
	  
	  //TLS
	  this.replaceInorder(current.leftNode, inorderArr, replaceIndex);

	  //Perform Replace
	  current.value = inorderArr.arr[replaceIndex.index - 1] + inorderArr.arr[replaceIndex.index + 1];
	  replaceIndex.index++;
	  console.log(current.value);

	  //TRS
	  this.replaceInorder(current.rightNode, inorderArr, replaceIndex);
	}
  }

  replaceWithSum() {
	let current = this.root;
	var inorderArr = {
	  arr : [],
	  arrIndex : 0,
	}
	this.createInOrder(current, inorderArr);

	// Pad arr with 0 on both edge
	inorderArr.arr.unshift(0);
	inorderArr.arr.push(0);
	
	var replaceIndex = {
	  index : 1
	}

	this.replaceInorder(current, inorderArr, replaceIndex);
  }
}

module.exports = SumOfInPreSucc;
