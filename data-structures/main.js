var stack = require('./stack/stack');
var Set = require('./set/set');
var Queue = require('./queue/queue')


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