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
    add(data) {
        this.head = new Node(data,this.head);
    }
  
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head
        let node = this.head.next;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        
        prev.next = null;
    }

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
