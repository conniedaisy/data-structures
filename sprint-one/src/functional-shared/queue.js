var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;
  // someInstance.count = 0;
  // someInstance.result;

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
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  var result = this.storage[0];
  this.index--;

  var count = 1;
  for (var k in this.storage) {
    this.storage[k] = this.storage[count];
    count++;
  }
  return result;
};
