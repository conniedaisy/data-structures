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
  this.children.push({}); //[{0: null}]
  this.children[this.index]['value'] = value; //{}.value = value;
  // console.log(this.children[this.index]);
  this.index++;
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.index; i++) {
    if (this.children[i]['value'] === target) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
