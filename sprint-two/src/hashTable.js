

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i] = [k, v];
        return;
      }
    } 
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (Array.isArray(this._storage[index][i]) && this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    } 
  }
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        delete this._storage[index][i];
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 * If a bucket doesn't have values already, then the time complexity is O(1)
 * But if a bucket does have values, and a new key value pair is added, then the time complexity
 * becomes O(n)
 */


