var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.index = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  if (this.index < 0) {
    this.index = 0;
  }
  return this.index;
};

queueMethods.enqueue = function(value) {
  this.index++;
  this[this.index] = value;
};

queueMethods.dequeue = function() {
  var result = this[this.index];
  this.index--;
  return result;
};