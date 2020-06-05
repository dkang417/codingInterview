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
        const node = this.head;
        const count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getLast() {
        if (!this.head) {
            return;
        }
        const node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            else {
                node = node.next;
            }
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
        const node = this.head;
        const last = this.head.next;
        while (last.next) {
            node = last;
            last = last.next;
        }
        node.next = null;
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
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }
    insertAt(index, data) {
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
    }
    insertAt(index, data) {
        if (index === 0) {
            this.head = new Node(data, this.head)
            return;
        }
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
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
        const node = this.head;
        const count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getLast() {
        if (!this.head) {
            return;
        }
        const node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            else {
                node = node.next;
            }
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
        const node = this.head;
        const prev = this.head.next;
        while (prev.next) {
            node = prev;
            prev = prev.next;
        }
        node.next = null;
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
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;
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
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
    }
    insertAt(data, index) {
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
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
        const count = 0;
        const node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getLast() {
        if (!this.head) {
            return;
        }
        const node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            } else {
                node = node.next;
            }
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
            prev = node;
            node = node.next;
        }
        prev.next = null;
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
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;

    }
    insertAt(data, index) {
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
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
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;

    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;

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
        const count = 0;
        const node = this.head;
        while (node) {
            node = node.next;
            count++;
        }
        return count;
    }
    getLast() {
        if (!this.head) {
            return;
        }
        const node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            } else {
                node = node.next;
            }
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
        const node = this.head;
        const last = this.head.next;
        while (last.next) {
            node = last;
            last = last.next;
        }
        node.next = null;
    }
    getAt(index) {
        const count = 0;
        const node = this.head;
        while (node) {
            if (index === count) {
                return node;
            }
            else {
                node = node.next;
                count++;
            }
        }
        return null;
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
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;

    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
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
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, this.prev.next);
        prev.next = node;
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
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
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
        const node = this.head;
        const count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getLast() {
        if (!this.head) {
            return;
        }
        const node = this.head;
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
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }
    getAt(index) {
        const node = this.head;
        const count = 0;

        while (node) {
            if (index === count) {
                return node;
            }
            else {
                count++;
                node = node.next;
            }
        }
        return null;
    }
    getAt(index) {

        const node = this.head;
        const count = 0;
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
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prev.next);
        prev.next = node;
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
        const node = this.head;
        const count = 0;
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
        const node = this.head;
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
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }
    getAt(index) {
        const node = this.head;
        const count = 0;
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
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        if (!this.head) {
            return;
        }
        const prev = this.getAt(index - 1);
        if (!prev || prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getlast();
        const node = new Node(data, this.prev.next);
        prev.next = node;

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
        const node = this.head;
        const count = 0;
        while (node) {
            node = node.next;
            count++;
        }
        return count;
    }
    getLast() {
        const node = this.head;
        if (!this.head) {
            return;
        }
        while (node) {
            if (!node.next) {
                return node;
            }
            else {
                node = node.next;
            }
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
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }
    getAt(index) {
        const node = this.head;
        const count = 0;
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
    removeAt(index) {
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

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getlast();
        const node = new Node(data, this.prev.next);

        prev.next = node;

    }
}
