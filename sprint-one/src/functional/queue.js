var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var result;
  var count = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    size--;

    result = storage[0];
    if (count !== 1) {
      count = 1;
    }
    for (var k in storage) {
      storage[k] = storage[count];
      count++;
    }
    return result;

  };

  someInstance.size = function() {
    size < 0 ? size = 0 : size;
    return size;
  };

  return someInstance;
};