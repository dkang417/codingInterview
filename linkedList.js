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
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
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



}



module.exports = { Node, LinkedList };
