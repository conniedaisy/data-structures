var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    this.tail = Node(value); //not getting {'4':4}, getting {'value':4} 
    // console.log(result);
    // this.tail = result['value']; //list.tail = value, instead of null
    // console.log(this.tail);

  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };
  console.log(list.tail);
  return list;
};
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// console.log(LinkedList.tail);
//addToTail(4)
//{something: 4} --> this.tail = 4
//addToTail(5)
//{something:4, something: 5} --> this.tail = 5


/*
 * Complexity: What is the time complexity of the above functions?
 */
