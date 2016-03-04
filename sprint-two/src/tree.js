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
  // console.log(this.children);
  // if (this.children.length ) {
  //   this.children = []; //this.node = {all properties of Tree/}
  // }
  this.children.push(Tree()); //this.children = [{this.node}]
  this.children[this.index].value = value; //this.children = [{index=0, all properties of Tree}.value = 5]
  //adding another value as a children of 
  this.index++;
};

treeMethods.contains = function(target) {
  var children = this.children;
  var result;
  var booleanResults;
  treeMethods.search = function (target, collection) {
    // console.log(this);

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
    console.log(booleanResults);
    console.log(result);
    return result;

    // for (var i = 0; i < children.length; i++) {  
    //   if (_.contains(children[i], target)) {
    //     return true;
    //   } else if (children[i].length > 0) {
    //     return treeMethods.search(target, children[i]);
    //   } else {
    //     return false;
    //   }
    // }

    // for (var i = 0; i < children.length; i++) {  
    //   if (children[i].value === target) {
    //     return true;
    //   } else if (children[i].length > 0) {
    //     return treeMethods.search(target, children[i]);
    //   } else if (children[i].value !== target) {
    //     return false;
    //   }
    // }
  };

  return treeMethods.search(target, children);
  
};

// true + false === false;

/*
 * Complexity: What is the time complexity of the above functions?
 */
