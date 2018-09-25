class Deletion {
  constructor(root) {
    this.root = root;
  }

  delete(value) {
	let current = this.root;
	function traverseToBFS(current) {
	  let queue = [];
	  queue.unshift(current);

	  while (queue.length) {
		let examineNode = queue.shift();
		if(examineNode.value == value) {
		  const deepestNode = findDeepest(current);
		  examineNode.value = deepestNode.value;
		  deleteDeepest(deepestNode);
		} else if (!examineNode.leftNode && examineNode.rightNode) {
		  queue.push(examineNode.rightNode);
	   	} else if (!examineNode.rightNode && examineNode.leftNode) {
		  queue.push(examineNode.leftNode);
		} else if (!examineNode.leftNode && !examineNode.rightNode) {
		  continue;
		} 
		else {
		  queue.push(examineNode.leftNode, examineNode.rightNode);
		}
	  } 
  	  function findDeepest(current) {
  	 	let q = [];
  	 	q.unshift(current);
  	 
  	 	while (q.length) {
		  var examineNode = q.shift();
		  if (!examineNode.leftNode && examineNode.rightNode) {
		  	q.push(examineNode.rightNode);
		  } else if (!examineNode.rightNode && examineNode.leftNode) {
		  	q.push(examineNode.leftNode);
		  } else if (!examineNode.leftNode && !examineNode.rightNode) {
			  continue;
		  }else {
		  	q.push(examineNode.leftNode, examineNode.rightNode); 
		  }
  	 	}
		return examineNode;
	  }
	  function deleteDeepest(deepestNode) {
		let q = [];
		q.unshift(current);

		while (q.length) {
		  var examineNode = q.shift();
		  if (examineNode.leftNode === deepestNode) {
			examineNode.leftNode = null;
			return;
		  } else if (examineNode.rightNode === deepestNode) {
		  	examine.rightNode = null;
			return;
		  } else {
		  	q.push(examineNode.leftNode, examineNode.rightNode);
		  }
		}
	  }
	}
	traverseToBFS(current);
  }
}

module.exports = Deletion;
