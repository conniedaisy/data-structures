var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
};

Queue.prototype.size = function() {
  return this.index;
};

Queue.prototype.enqueue = function(value) {
  this.index++;
};

Queue.prototype.dequeue = function() {
  this.index--;
};

var someInstance = new Queue();

