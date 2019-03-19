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
    }

}



module.exports = { Node, LinkedList };
