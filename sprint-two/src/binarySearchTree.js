var BinarySearchTree = function(value) {
  var someInstance = {};
  someInstance.value = value;

  someInstance.left = undefined;
  someInstance.right = undefined;

  _.extend(someInstance, binaryMethods);
  return someInstance;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
      return;
    } else if (this.left !== undefined) {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
      return;
    } else if (this.right !== undefined) {
      this.right.insert(value);
    }
  }
};

binaryMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (target < this.value) {
      if (this.left !== undefined) {
        return this.left.contains(target);
      }
    } else if (target > this.value) {
      if (this.right !== undefined) {
        return this.right.contains(target);
      }
    }
  }
  return false;
};

binaryMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== undefined && this.right !== undefined) {
    this.left.depthFirstLog(func);
    this.right.depthFirstLog(func);
  } else if (this.left !== undefined && this.right === undefined) {
    this.left.depthFirstLog(func);
  } else if (this.right !== undefined && this.left === undefined) {
    this.right.depthFirstLog(func);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * BinarySearchTree.insert = O(log(n))
 * BinarySearchTree.contains = O(log(n))
 * BinarySearchTree.depthFirstLog = O(n^2)
 */
