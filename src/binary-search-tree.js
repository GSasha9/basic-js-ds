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

  find(data) {
    let currentNode = this.givenRoot;
    if(!currentNode) {
      return null;
    }

    while(currentNode) {
      if(currentNode.data === data) {
        return currentNode;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(data === node.data) {
        if(!node.left && !node.right) {
          return node = null;
        } else if(!node.left) {
          return node.right;
        } else if(!node.right) {
          return node.left;
        }
          let tempNode = findMinElement(node.right);
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }


    function findMinElement(node) {
      while (node.left) {
        node = node.left;
        }
        return node;
    }

    removeNode(this.givenRoot, data);
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