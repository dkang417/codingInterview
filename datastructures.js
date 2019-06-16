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
}

const list = new SinglyLinkedList();




class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;

    }
  
    pop() {
        if (!this.head) return undefined;
        const node = this.head;
        const newtail = node;
        while (node.next) {
            node = node.next;
            newtail = node;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return node;
        
    }
    
    shift() {
        if (!this.head) return undefined;
        const node = this.head;
        this.head = node.next;
        this.length--;
        return node;
    }
    
    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        const node = this.head;
        const count = 0;
        while (count !== index) {
            node = node.next;
            count++;
        }
        return node;
    }
    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        } return false;
        
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        const node = this.get(index - 1);
        const temp = node.next;
        const newNode = new Node(val);
        node.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }
    remove(index) {
        
    }
    
    reverse() {
        // prev node next 
        const node = this.head;
        this.head = this.tail;
        this.tail = node;
        const prev = null;
        const next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
