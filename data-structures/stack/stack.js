/* Stack */
var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Insert a value into the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };

    // Removes a value from the end and returns that value
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    // Returns the end value in the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    };

    // Returns the number of items in the stack
    this.size = function () {
        return this.count;
    };
}

module.exports = new Stack();