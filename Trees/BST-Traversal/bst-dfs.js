var BinarySearchTree = require('./bst.js');

class DepthFirstTraverser extends BinarySearchTree {
  // pre-order -> root, left, right
  // in-order -> left, root, right
  // post-order -> left, right, root
  constructor(){
    this.traverseMethod = 'pre-order';
  }

  setTraverseMethod(traverseMethod){
    if(traverseMethod == 'pre-order' || traverseMethod == 'in-order' || traverseMethod == 'post-order'){
      this.traverseMethod = traverseMethod;
    } else {
      console.error('Not a valid search method, must be "pre-order", "in-order" or "post-order"');
    }
  }

  getTraverseMethod(){
    return this.traverseMethod;
  }

  traverse(){
    switch(this.traverseMethod){
      case 'pre-order':
        this.preOrderTraverse(value);
        break;
      case 'in-order':
        this.inOrderTraverse(value);
        break;
      case 'post-order':
        this.postOrderTraverse(value);
        break;
      default:
        console.error('invalid traverse method');
    }
  }

  preOrderTraverse(value){


  }

  inOrderTraverse(value){

  }
  postOrderTraverse(value){

  }
}

module.exports = DepthFirstTraverser;

