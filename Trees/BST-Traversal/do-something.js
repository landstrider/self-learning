var DepthFirstTraverser = require('./bst-dfs');

var dfs = new DepthFirstTraverser;

dfs.add(3);

console.log(dfs.contains(3));
