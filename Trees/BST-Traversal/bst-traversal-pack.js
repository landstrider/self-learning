class BinarySearchTree {
  
  constructor(){
    this.root = null;
  }
  
  // add a node to the tree
  add(value){
    let newNode = { value, left: null, right: null};
    
    // set the root if we don't have one
    if(this.root == null){
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    
    while(true){
      // check for right
      if(value > current.value){
        // add right
        if(!current.right){ current.right = newNode; break; }
        
        current = current.right;
        
      // check for left
      } else if(value < current.value){
        // add left
        if(!current.left){ current.left = newNode; break; }
        
        current = current.left;
      } else {
        // if it's the same ignore
        break;
      }
    }
  }

  // search for a specific value
  contains(value){
    let current = this.root;

    while(current){
      if(current.value == value){
        return true;
      } else if (current.value > value){
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

class DepthFirstTraverser extends BinarySearchTree {
  // pre-order -> root, left, right
  // in-order -> left, root, right
  // post-order -> left, right, root
  constructor(){
	super();
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

  preOrderTraverse(root){
	if (root) {
		this.preOrderTraverse(root.left);
		console.log(root.value);
		this.preOrderTraverse(root.right);
    }
  }

  inOrderTraverse(root){
	if (root) {
		console.log(root.value);
		this.inOrderTraverse(root.left);
		this.inOrderTraverse(root.right);
	}
  }

  postOrderTraverse(root){

  }
}

class BreadthFirstTraverser extends BinarySearchTree {
  traverse(value){

  }
}

var DFS = new DepthFirstTraverser();

DFS.add(2);
DFS.add(6);
DFS.add(8);

DFS.preOrderTraverse(DFS.root);

