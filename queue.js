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

class Queue {
    // first in first out unshift (add to front)
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
class Stack {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.push(record);
    }
    pop() {
       return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}


module.exports = Queue;

// object 

// {0:'one'. 1:'two', 2:'three'}
class Queue {
    constructor() {
        this.storage = {};
        this.length = 0;
        this.head = 0;
    }
    enqueue(data) {
        this.storage[this.length + this.head] = data;
        this.length++;
        
    }
    dequeue() {
        if (this.length) {
            const firstVal = this.storage[this.head];
            delete this.storage[this.head];
            this.length--;
            this.head++;
            return firstVal;
        }
        
    }
    
}

const myQ = new Queue();
myQ.enqueue('zero');
myQ.enqueue('one');
myQ.dequeue();
myQ.enqueue('thirty')
console.log(myQ);


