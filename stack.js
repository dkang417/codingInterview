// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// first in last out FILO

// array 
class Stack {
    constructor() {
        this.data = [];
    }

    //push 
    push(record) {
        this.data.push(data);
    }
    //pop
    pop() {
        return this.data.pop();
    }

    //peek  without actually popping it out of that array
    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;



// [0:'zero', 1:'two', 2:'nine'];
    // length: 3

 // object 

 class Stack {
    constructor() {
        this.storage = {};
        this.length = 0;
    }

    push(value) {
        this.storage[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length) {
            const last = this.storage[this.length-1];
            this.storage[this.length - 1] = null;
            this.length--;
            return last;
        }
        
    }
     peek() {
        if (this.length) {
            const last = this.storage[this.length-1];            
            return last;
        }
    } 
}

const myStack = new Stack(); 
myStack.push('zero');
myStack.push('one');
myStack.pop();
myStack.push('twelve')
console.log(myStack.peek());
console.log(myStack);