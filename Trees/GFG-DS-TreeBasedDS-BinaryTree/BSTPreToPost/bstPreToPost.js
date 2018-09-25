function findBstPostFromPre(preOrder, n, minval, maxval, preOrderIndex) {
  if (preOrderIndex.index == n) return;

  if (preOrder[preOrderIndex.index] < minval || preOrder[preOrderIndex.index] > maxval) {
	return;
  }

  var val = preOrder[preOrderIndex.index];
  preOrderIndex.index++;

  findBstPostFromPre(preOrder, n, minval, val, preOrderIndex);

  findBstPostFromPre(preOrder, n, val, maxval, preOrderIndex);

  console.log(val);
}

function bstPreToPost(preOrder, n) {
  const minval = Number.MIN_SAFE_INTEGER;
  const maxval = Number.MAX_SAFE_INTEGER;

  // To store index of element to be
  // traversed next in preorder array.
  // This is passed by reference to
  // utility function.
  var preOrderIndex = {index: 0};

  findBstPostFromPre(preOrder, n, minval, maxval, preOrderIndex);
}

module.exports = bstPreToPost;
