var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] =  value;
    index++;
  };

  someInstance.dequeue = function() {
    if (index > 0) {
      index --;
    }
    return storage[index];
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
