

// ------------------------
// Instantiate a new graph
var Graph = function() {
  //storage
  this.storage = {}; 
  //index = {value: 1, pointTO, pointFrom}
  //two = {node2}

  //{
  //{
    //index: value,
    //pointTo: value,
    //pointFrom: value
  //},
  //{node 2}
  //}
  this.index = 0;
  this.edges = [];
  //index
};

var someInstance = new Graph();

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //graph0
  this.storage[this.index] = new Graph(); //{0: graph0{value: node, index: 0}, 1: graph1{value: node}}
  this.storage[this.index].value = node;
  this.index++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[this.index - 1] && this.storage[this.index - 1].value === node) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage[this.index - 1].value === node) {
    //remove node
    delete this.storage[this.index - 1];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var k in this.storage) {  
    if (this.storage[k].value === fromNode) {
      for (var i = 0; i < this.storage[k].edges.length; i++) {
        if (this.storage[k].edges[i] === toNode) {
          return true;
        }
      }
      // this.storage[k].edges.push(toNode); //[toNode]
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var k in this.storage) {  
    if (this.storage[k].value === fromNode) {
      this.storage[k].edges.push(toNode); //[toNode]
    }
    if (this.storage[k].value === toNode) {
      this.storage[k].edges.push(fromNode); //[fromNode]
    }
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var k in this.storage) {  
    if (this.storage[k].value === fromNode) {
      var ind = _.indexOf(this.storage[k].edges, toNode);
      this.storage[k].edges.splice(ind, 1);
    }
    if (this.storage[k].value === toNode) {
      var inde = _.indexOf(this.storage[k].edges, fromNode);
      this.storage[k].edges.splice(inde, 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //traverse through all the object instances
  //look up value
  //invoke callback
  for (var k in this.storage) {
    cb(this.storage[k].value);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * O(n^2)
 */


