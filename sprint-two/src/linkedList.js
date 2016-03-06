var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var size = 0;
  var headNum = 0;

  list.addToTail = function(value) {

    // if (list.tail === null) {
    //   list[size] = Node(value);
    // } else {
    //   list[size] = Node(value);
    //   list[size - 1].next = list[size];
    // }

    // list.tail = list[size];
    // if (list.head === null) {
    //   list.head = list.tail;
    // }
    // size++;

    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      //the previous node before newNode should have next pointer pointing at newNode
      //oldNode.next = newNode
      var temp = list.tail;
      list.tail = newNode; //WRONG
      temp.next = newNode;
    }


  };

  list.removeHead = function() {
    // var lastHeadValue = this[headNum].value;
    // headNum++;
    // list.head = this[headNum];
    // return lastHeadValue;
    var headValue = list.head.value;
    list.head = list.head.next;

    return headValue;

  };

  list.contains = function(target) {
  //   for (var i = headNum; i < size; i++) {
  //     if (list[i].value === target) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

    var search = function(node) {
      // debugger;
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return search(node.next);
      }
      // return false;
    };
    return search(list.head);


  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
