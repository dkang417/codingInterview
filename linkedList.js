// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let count = 0;
        const node = this.head;
        while (node) {
            node = node.next;
            count++;
        }
        return count;        
    }
    
    getLast() {
        const node = this.head;
        if (!node.next) {
            return null;
        }
        while (node.next) {
            if (!node.next) {
                return node;
            } else {
                node = node.next;
            }
        }
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // const node = new Node(data, this.head);
        // this.head = node;
        // above code can be condensed to this:
        this.head = new Node(data, this.head);
    }

    // size method - returns number of nodes in linkedlist
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    

    // return the first node 
    getFirst() {
        return this.head; 
    }

    
   
    // get the last node 
    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }



    // clear all nodes 
    clear() {
        this.head = null;
    }

    // remove the first node 
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    // remove the last node 
    // edge cases - empty , if only 1 node in linked list. 
   
    removeLasT() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev= this.head;
        let node = this.head.next;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }
   

    // insert data as a new node into last 

    insertLast(data) {
        const last = this.getlast();
        if (last) {
            // there are some nodes in the chain
            last.next = new Node(data);
        } else {
            // chain is empty
            this.head = new Node(data);
        }
        
    }
   

    // get at - returns the node at the provided index 
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) { 
                return node;
            }
            counter++;
            node = node.next;

        }
        // if index is invalid then just return null
        return null;
    }
   
    removeAt(index) {
        // 4 edge cases to think about here 

        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next; 

    }

    insertAt(data, index) {
        // empty linkedlist
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        // only 1 node in linkedlist
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // if index is non existant just use the last node and add new node to the end of the linkedlist 
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data,this.prev.next);
        previous.next = node;

    }




}


module.exports = { Node, LinkedList };


// linked list FrontendMasters 
class LinkedList {
    constructor() {
        this.head = { value, next: null };
        this.tail = this.head;
    }

    insert(value) {
        const node = { value, next: null };
        this.tail.next = node;
        this.tail = node;

    }
    // [3] -> [5]
    // delete tail
    removeLast() {
        // loop and find the node before the tail
        // node.next === this.tail 
        let currentNode = this.head;
        while (currentNode.next !== this.tail ) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    isHead(node) {
        return node === this.head;
    }

    isTail(node) {
        return node === this.tail;
    }
    contains(value) {
        let currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode.value === value;
    }

    contains(value) {
        let node = this.head;
        while (node.value !== value) {
            node = node.next;
        }
        return node.value === value;
    }
}




