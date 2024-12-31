const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data = null) {
    this.givenRoot = data !== null ? new Node(data) : null;
  }

  root() {
    return this.givenRoot;
  }

  add(data) {
    let newNode = new Node(data);

    function searchTree(node) {
      if(data < node.data) {
        if(!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (data > node.data) {
        if(!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    }

    if(this.givenRoot){
      searchTree(this.givenRoot);
    } else {
      searchTree(this.givenRoot = newNode)
    }
  }

  has(data) {
    let currentNode = this.givenRoot;
    if(!currentNode || data === null) {
      return false;
    }

    function hasNode(current) {
      if(data === current.data) {
        return true;
      } else if (data > current.data) {
            if(current.right) {
            return hasNode(current.right);
        }
      } else {
          if(current.left) {
            return hasNode(current.left);
        }
      }
      return false;
    }
    return hasNode(currentNode);
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
      let current = this.givenRoot;
      if(current){
      while(current.left) {
        current = current.left;
      }
      return current.data;}
      else {
        return null
      }
  }

  max() {
      let current = this.givenRoot;
      if(current){
      while(current.right) {
        current = current.right;
      }
      return current.data;}
      else {
        return null
      }
  }
}

module.exports = {
  BinarySearchTree
};