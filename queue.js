// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// first in first out 
// unshift is how to add to the front of an array

class Queue {
    constructor() {
        this.data = [];
    }
    // add record to the front of the array-unshift
    add(record) {
        this.data.unshift(record);
    }
    // remove from the end of the queue 
    remove() {
        return this.data.pop();
    }
    // return the last element of the queue or the next element to be returned
    peek() {
        return this.data[this.data.length - 1];
    }
}


module.exports = Queue;

