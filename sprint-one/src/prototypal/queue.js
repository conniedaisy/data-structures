var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.length = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  if (this.length < 0) {
    this.length = 0;
  }
  return this.length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  this.length--;
  var result = this.storage[0];
  var count = 1;
  for (var k in this.storage) {
    this.storage[k] = this.storage[count];
    count++;
  }
  return result;
};