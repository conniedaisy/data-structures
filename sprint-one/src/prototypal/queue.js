var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.index = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.index;
};
