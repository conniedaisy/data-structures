var LinkedList = function() {
  var list = {};
  var someInstance = {};
  list.head = null;
  list.tail = null;
  var index = 0;
  var headNum = 0;
  // list.where = 'list.tail';
  // list.where = list.where.concat('.next');
  // JSON.parse(list.where);
  list.addToTail = function(value) {
    //no null yet
    list[index] = Node(value); // list['0'] = {value:4, next:null}

    list.tail = list[index];
    if (list.head === null) {
      list.head = list.tail;
    }
    index++;

    // // var objX = Node(value);
    // if (list === {}) {
    //   list = Node(value); //{'value':4, 'next':null}
    // } else {
    //   list.next = Node(value); // 'next': {'value':5, 'next':null}
    // }

    // if (list.tail === null) {
    //   list.tail = list; // list.tail = {'value':4, 'next':null} 
    // } else {
    //   list.tail = list.next;
    // }
    // if (list.head === null) {
    //   list.head = list.tail;
    // }
  };

  list.removeHead = function() {
    var lastHeadValue = this[headNum].value;
    headNum++;
    list.head = this[headNum];
    return lastHeadValue;
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
//{value:4, next: {value:5, next: {value: 6, next: null} } }
//{value:4, next: } -> {value:5} -> {}
/*
 * Complexity: What is the time complexity of the above functions?
 */
// list.tail.value = 4;
// list.tail.value.value = 5