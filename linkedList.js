
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
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
        this.head = new Node(data, this.head);
    }
    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            node = node.next;
            count++;
        }
        return count;
    }
    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
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
    removeLast() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        const prev = this.head;
        const node = this.head.next;
        while (node.next) {
            node = node.next;
            prev = node;
        }
        prev.next = null;
    }
    removeLast() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let last = this.head.next;
        while (last.next) {
            prev = last;
            last = last.next;
        }
        prev.next = null;
    }
    getAt(index) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }
    getAt(index) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (index === count) {
                return node;
            } else {
                count++;
                node = node.next;
            }
        }
        return null;
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
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getLast() {
        // edge cases 
        if (!this.head) {
            return null;
        }
        let node = this.head
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        const prev = this.head;
        const node = this.head.next;
        while (node.next) {
            node = node.next;
            prev = node;
        }
        prev.next = null;

    }
    removeLast() {
        // check if head is empty  - (no nodes)
        if (!this.head) {
            return;
        }
        // check if head.next is empty  - (only 1 node)
        if (!this.head.next) {
            this.head = null;
        }

        let prev = this.head;
        let node = this.head.next;
        // while there is a node.next
        // move prev and node 
        while (node.next) {
            prev = node;
            node = node.next;
        }
        // previours. next becomes null 
        prev.next = null;
    }





    getAt(index) {
        // traverse through linked list using a counter
        // while there is a head 
        // if counter === index return node
        // else traverse node and increment counter 

        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            } else {
                node = node.next;
                count++;
            }
        }
        return null;
    }
    getAt(index) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }
    getAt(index) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            } else {
                count++;
                node = node.next;
            }
        }
        return null;
    }

    removeAt(index) {

        // edge case no head
        if (!this.head) {
            return;
        }
        // edge case head     
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let node = this.getAt(index - 1);
        if (!node || !node.next) {
            return;
        }
        node.next = node.next.next;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        // removes first element 
        if (index === 0) {
            this.head = this.head.next;
        }
        // leap frogs the index node 
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prev = this.getAt(index - 1);
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        // check head
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        // check if index is 0
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // leap frog - create 2 nodes- prev,node- getAt(index-1) or getLast  - newnode data,prev.next
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;


    }




}

class Node {
    constructor(data) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFirst(record) {
        this.head = new Node(record, this.head);
    }
    // 1
    // 1 2 
    count() {
        const node = this.head;
        const counter = 0;
        while (node) {
            node = node.next;
            counter++;
        }
        return counter;
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


    removeLast() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;

    }
    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (index === count) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }
    getAt(index) {

        let node = this.head;
        let count = 0;

        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }


    removeAt(index) {
        // if this.head is null 
        if (!this.head) {
            return;
        }
        // if index is 0 
        if (index === 0) {
            this.head = this.head.next;
        }
        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
        // leap frog method - create prev node = prev.next.next 
        // if theres no prev or no prev.next just return 
    }

    removeAt(index) {
        // check if linkedlist is empty
        if (!this.head) {
            return;
        }
        // check if index is 0 
        if (index === 0) {
            this.head = this.head.next;
        }
        // leap frog to remove prev.next = prev.next.next 
        const prev = this.getAt(index - 1);
        // check edge cases - if no previous or no prev.next
        // edge case if prev is the last node and there are no nodes after 
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }
    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        if (!this.head) {
            return;
        }
        let prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }
    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        if (!this.head) {
            return;
        }
        const prev = this.getAt(index - 1);
        // edge cases no prev or 1 larger than the total size
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }




    insertAt(data, index) {
        // check if no head and return
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        // if index is 0 and return - because get at looks before 0
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // get at looks at index -1 
        // or the last item on the chain using getlast()
        // leap frog method  - create a prev use get at or getLAST    AND create a node 
        // or getlast() because we are looking at last node if the index is out of bounds
        const prev = this.getAt(index - 1) || this.getLast();
        // new node and the next node on this is the prev node.next . switches connection 
        const node = new Node(data, prev.next);
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
    getLast() {
        if (!this.head) {
            return null;
        }
        const node = this.head;
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
        let prev = this.head;
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
        // leap frog method  - create a prev use get at or getLAST    AND create a node 
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
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
        while (currentNode.next !== this.tail) {
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


class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            this.head = this.head.next;
        }
        return count;
    }
    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        }
        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }



    removeLast() {

        let node = this.head;
        let last = this.head.next;
        while (last.next) {

        }

    }
    getAt(index) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }
    getAt(index) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            }
            node = node.next;
            count++
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prev = this.getAt(index - 1);
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }
    removeAt(index) {
        //edge cases 

        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        }
        const prev = this.getAt(index - 1);
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }

    removeAt(index) {

    }
    getAt(index) {

    }
}