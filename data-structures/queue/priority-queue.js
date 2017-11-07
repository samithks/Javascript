function PriorityQueue() {
    var collection = [];

    // Print all the elements in queue
    this.print = function () {
        console.log(collection);
    };
    // Insert an element to the queue
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var isAdded = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    isAdded = true;
                    break;
                }
            }
            if (!isAdded) {
                collection.push(element);
            }
        }
    }
    // Delete an element from the queue
    this.dequeue = function () {
        var value = collection.shift()
        return value[0];
    }
    // To see the element to be deleted
    this.front = function () {
        return collection[0];
    }
    // To see the size of the queue
    this.size = function () {
        return collection.length;
    }
    // Check whether the collection is empty or not
    this.isEmpty = function () {
        return (collection.length === 0);
    }
}

module.exports = PriorityQueue;