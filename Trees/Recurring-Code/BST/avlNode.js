function treeNode(value) {
  var node = {
    value: value,
    leftNode: null,
    rightNode: null,
    rightNullHeight: -1,
    leftNullHeight: -1,
    nodeHeight: 0,
  }
  return node;
}

module.exports = treeNode
