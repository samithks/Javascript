var stack = require('./stack/stack');
var Set = require('./set/set');
var Queue = require('./queue/queue');
var PriorityQueue = require('./queue/priority-queue');


// Stack Operations
stack.push(2);
stack.push(3);

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.size());

// Set Operations
var setA = new Set();
var setB = new Set();

setA.add('a');
setB.add('b');
setA.add('c');
setB.add('d');
setA.add('e');
setB.add('f');
setA.add('i');
setB.add('j');
console.log(setA.subset(setB));
setA.remove('a');
console.log(setA.has('c'));

// Queue

var queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();

// Priority Queue

var priorityQueue = new PriorityQueue();

priorityQueue.enqueue(['H', 2]);
// priorityQueue.enqueue(['A', 1]);
// priorityQueue.enqueue(['B', 3]);
// priorityQueue.enqueue(['D', 2]);

priorityQueue.print();
