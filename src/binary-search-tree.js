const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data = null) {
    if(data) {
      this.givenRoot = new Node(data)
    }
  }

  root() {
    if(this.givenRoot) {
      return this.givenRoot;
    } else {
      return null;
    }
  }

  add(data) {
    let newNode = new Node(data);

    function searchTree(node) {
      if(data < node.value) {
        if(!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (data > node.value) {
        if(!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    }

    if(this.givenRoot){
      searchTree(this.givenRoot);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(this.givenRoot) {
      let current = this.givenRoot;
      while(current.left) {
        current = current.left;
      }
      return current.value;
    }
  }

  max() {
    if(this.givenRoot) {
      let current = this.givenRoot;
      while(current.right) {
        current = current.right;
      }
      return current.value;
    }
  }
}

module.exports = {
  BinarySearchTree
};