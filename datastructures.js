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
    // set the next property of the 2nd to last node to be null
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


    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        
    }
    // function takes an index
    // if less than 0 return null
    // loop through list until you reach index and return the node at that index
    // create a counter variable 
   
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        const counter = 0;
        const current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // change the value of a node based on its position in the list
    // function that takes a value and index 
    // use get function to find it 
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }


    // add a new node into a position 
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

   


    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const prevNode = this.get(index - 1);
        const removed = preveNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
   

    // reversing a singly linked list 

    reverse() {
        // need node, next, prev variables 

        // swapping head and tail 
        const node = this.head;
        this.head = this.tail;
        this.tail = node;

        const next;
        const prev = null;
        
        // 100   201   250  350  999   
        // prev  node  next 

        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            // moving 1 over
            prev = node;
            node = next;
        }   
        return this;
    }
    reverse() {
        // prev node next 
        const node = this.head;
        this.head = this.tail;
        this.tail = node;

        const next;
        const prev = null;

        for (let i = 0; i < this.length; i++){

            next = node.next;
            // first time is null 
            node.next = prev;

            // shift 1 over
            prev = node;
            node = next;
        }
        return this;
    }
 
    reverse() {
        // 5 2 1 99 
        // prev node next 
        const node = this.head;
        this.head = this.tail;
        this.tail = node;

        const next;
        const prev = null;
        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;

            prev = node;
            node = next; 
        }
        return this;
    }

   

   

}

const list = new SinglyLinkedList();



