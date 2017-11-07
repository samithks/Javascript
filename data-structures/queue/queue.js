/* Queue */

function Queue() {
    collection = [];

    // Print all the elements in queue
    this.print = function () {
        console.log(collection);
    };

    // Insert an element to the queue
    this.enqueue = function (element) {
        collection.push(element);
    };

    // Delete an element from the queue
    this.dequeue = function () {
        return collection.shift();
    };

    // To see the element to be deleted
    this.front = function () {
        return collection[0];
    };

    // To see the size of the queue
    this.size = function () {
        return collection.length;
    };

    // Check whether the collection is empty or not
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

module.exports = Queue;