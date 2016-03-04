var Tree = function(value) {
  var newTree = {};
  newTree.index = 0;
  newTree.value = value;

  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  // your code here

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree());
  this.children[this.index].value = value;
  this.index++;
};

treeMethods.contains = function(target) {
  var children = this.children;
  var result;
  var booleanResults;
  treeMethods.search = function (target, collection) {

    booleanResults = _.map(collection, function(child) {
      if (child.value === target) {
        return true;
      } else if (child.children.length > 0) {
        return treeMethods.search(target, child.children);
      } else {
        return false;
      }
    });
    result = _.reduce(booleanResults, function(a, b) {
      if (a || b === true) {
        return true;
      }
      return false;
    });
    return result;
  };

  return treeMethods.search(target, children);
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 * O(n)
 */
