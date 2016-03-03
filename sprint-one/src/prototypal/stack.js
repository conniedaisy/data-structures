var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.index = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  if (this.index < 0) {
    this.index = 0;
  }
  return this.index;
};
stackMethods.push = function(value) {
  this[this.index] = value;
  this.index++;
};
stackMethods.pop = function() {
  this.index--;
  var result = this[this.index];
  return result;
};