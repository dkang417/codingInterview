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

// need length, head, tail 
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = null;
        this.head = null;
    }

    // create a newnode with val
    // if no head - head becomes newnode amd tail becomes head
    // else - tail.next becomes newnode and tail becomes newnode
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
   
   
    // if there are no nodes return undefined
    // loop through list until you reach tail
    // see the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last node 
    // decrement the length by 1
    // return value of removed node 
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
    pop() {
        if (!this.head) {
            return undefined;
        }
        const current = this.head;
        const newTail = current;
        while (current.next) {
            current = current.next;
            newTail = current;
        }
        this.tail = newTail;
        this.length--;
        this.tail.next = null;
    }
    


    // remove the head and head.next becomes the head 
    shift() {
        if (!this.head) {
            return undefined;
        }
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
    }
   
   

}

const list = new SinglyLinkedList();