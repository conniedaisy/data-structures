var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.index = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  // var size = 0;
  return this.index; //someInstance.size
};

stackMethods.push = function() {
  this.index++;
};













// var Stack = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var index = 0;
//   // Implement the methods below
//   someInstance.push = function(value) {
//     storage[index] = value;
//     index++;
//   };

//   someInstance.pop = function() {
//     index--;
//     return storage[index];
//   };

//   someInstance.size = function() {
//     if (index < 0) {
//       index = 0;
//     }
//     return index;
//   };

//   return someInstance;
// };
