var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  if (this.index < 0) {
    this.index = 0;
  }
  return this.index;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  this.index--;
  return this.storage[this.index];
};

var someInstance = new Queue();

