var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;

};

Stack.prototype.size = function() {
  return this.index;
};

Stack.prototype.push = function() {
  this.index++;
};

Stack.prototype.pop = function() {
  this.index--;
};

var someInstance = new Stack();