// udemy colt steele 

// Singly Linked List 

//  data structure-head, tail, length property 
// each node has value and a pointer to another node or null


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.length = 0;
        this.tail = null;
        this.head = null;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        const current = this.head;
        const newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
const list = new SinglyLinkedList();