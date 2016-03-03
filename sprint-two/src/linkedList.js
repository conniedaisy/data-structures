var LinkedList = function() {
  var list = {};
  var someInstance = {};
  list.head = null;
  list.tail = null;
  var index = 0;
  var headNum = 0;

  list.addToTail = function(value) {

    if (list.tail === null) {
      list[index] = Node(value);
    } else {
      list[index] = Node(value);
      list[index - 1].next = list[index];
    }

    list.tail = list[index];
    if (list.head === null) {
      list.head = list.tail;
    }
    index++;

  };

  list.removeHead = function() {
    var lastHeadValue = this[headNum].value;
    headNum++;
    list.head = this[headNum];
    return lastHeadValue;
  };

  list.contains = function(target) {
    for (var i = headNum; i < index; i++) {
      if (list[i].value === target) {
        return true;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
