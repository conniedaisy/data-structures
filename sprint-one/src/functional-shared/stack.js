var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.index = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.index;
};

stackMethods.push = function(value) {
  this[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index === 0) {
    return {};
  }
  this.index--;
  return this[this.index];
};