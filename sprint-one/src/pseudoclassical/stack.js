var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  if (this.index < 0) {
    this.index = 0;
  }
  return this.index; //size = 1
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value; //index = 0
  this.index++; //size= 1
};

Stack.prototype.pop = function() {
  this.index--; //index = 1-1 = 0
  return this.storage[this.index]; //index = 0
};

var someInstance = new Stack();