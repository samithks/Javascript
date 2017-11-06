/* Set */

function Set(arguments) {
    var collection = [];

    // Check the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    };

    // Return all the values in the set
    this.values = function () {
        return collection;
    };

    // Add an element to set if the element not exist
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    // Method to remove an element from an array
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // Method to get the size of the collection
    this.size = function () {
        return collection.length;
    };

    // Method will return the union of two sets
    this.union = function (otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (element) {
            unionSet.add(element);
        });
        secondSet.forEach(function (element) {
            unionSet.add(element);
        });
        return unionSet;
    };

    // Method will return the intersection of two sets
    this.intersection = function (otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function (element) {
            if (otherSet(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    };

    // Method will return the difference
    this.difference = function (otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values;

        firstSet.forEach(function (element) {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    };

    // Method to check the set is a subset or not
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (element) {
            return otherSet.has(element);
        });
    };
}

module.exports = Set;