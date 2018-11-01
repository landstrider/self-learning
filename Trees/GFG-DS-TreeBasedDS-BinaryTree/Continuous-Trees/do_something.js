var InOrderInsertion = require ('../Insertion/insertion.js');
var ContinuousTester = require('./continuous_tree.js');

var tree = new InOrderInsertion;

tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(1);
tree.insert(3);
tree.insert(5);

var contTester = new ContinuousTester(tree.root);

console.log(contTester.isContinuous(tree.root));
