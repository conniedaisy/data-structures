var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.index = 0;
  someInstance.storage = {};

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
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  this.index--;
  var result = this.storage[this.index];
  return result;
};