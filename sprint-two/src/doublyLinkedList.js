var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var size = 0;
  var headNum = 0;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      var tempTail = list.tail;

      // newNode.previous = list.tail;
      list.tail = newNode;
      list.tail.next = newNode;
      list.tail.previous = tempTail;
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    var search = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return search(node.next);
      }
    };
    return search(list.head);
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;
  return node;
};
