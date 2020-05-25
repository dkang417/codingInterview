// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
class Queue {
    constructor() {
        this.fist = new Stack();
        this.second = new Stack();
    }
    add(data) {
        this.first.add(data);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.remove());
        }
        const result = this.second.remove();
        while (this.second.peek()) {
            this.first.push(this.second.remove());
        }
        return result;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.remove());
        }
        const result = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.remove());
        }
        return result;
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.add(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.remove());
        }
        const result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.remove());
        }
        return result;
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(data) {
        this.first.push(data);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;

    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }
}


class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }

}


class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.add(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.remove());
        }
        const result = this.second.remove();
        while (this.second.peek()) {
            this.first.push(this.second.remove());
        }
        return result;
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }

}


class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove(record) {
        // while theres a record in first stack
        while (this.first.peek()) {
            // pop out of first stack into second stack
            this.second.push(this.first.pop());
        }
        const record = this.second.pop();

        // return everything back into stack1
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.peek();
        //return everything back into stack1
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }

}

module.exports = Queue;

class Queue {
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

class Queue {
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
    push(record) {
        this.data.push(record);
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
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }
}
class Stack {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.push(record);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }

}
// Implement a Queue datastructure using two stacks.
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(data) {
        this.first.push(data);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.remove());
        }
        const node = this.second.remove();
        while (this.second.peek()) {
            this.first.push(this.second.remove());
        }
        return node;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.remove());
        }
        const record = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.remove());
        }
        return node;
    }
}
