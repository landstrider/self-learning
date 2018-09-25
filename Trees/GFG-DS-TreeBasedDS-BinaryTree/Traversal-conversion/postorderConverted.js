var HashMap = require('../../../HashMap.js');

var hmap = new HashMap;

var preOrderIndex = 0;

function printPost(inOrder, preOrder, inOrderStart, inOrderEnd, hmap) {
  if (inOrderStart > inOrderEnd) return;
  
  // Find index of next item in preorder traversal in
  // inorder.
  let inOrderIndex = hmap.getItem(preOrder[preOrderIndex++]);

  // Traverse left tree
  printPost(inOrder, preOrder, inOrderStart, inOrderIndex - 1, hmap);

  // Traverse right tree
  printPost(inOrder, preOrder, inOrderIndex + 1, inOrderEnd, hmap);

  // Print root node at the end of traversal
  console.log(inOrder[inOrderIndex]);
}

function postorderConverted(inOrder, preOrder) {
  var totalNodes = preOrder.length;
  for (let i = 0; i<totalNodes; i++) {
	hmap.setItem(inOrder[i], i);
  }
  printPost(inOrder, preOrder, 0, totalNodes-1, hmap);
}

module.exports = postorderConverted;
