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
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const prev = this.get(index - 1);
        const removeme = prev.next;
        prev.next = removeme.next;
        this.length--;
        return removeme;
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


// queue
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0;
    }
    enqueue(val) {
        const temp = new Node(val);
        if (!this.head) {
            this.head = temp;
            this.count++; 
        } else {
            this.last.next = temp;
            this.last = temp;
            this.count++;
        }
        return this.count;
    }
    dequeue() {
        if (!this.head) {
            return null;
        }
        const temp = this.head;
        if (this.head = this.tail) {
            this.tail = null;
            this.count--;
        } else {
            this.first = this.first.next;
            this.count--;
            return temp.val;
        }
    }
}

// trees - bst 

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        }
        else if (data < this.data) {
            this.left = new Node(data);
        } 
        else if (data > this.right && this.right) {
            this.right.insert(data);
        }
        else if (data > this.right) {
            this.right = new Node(data);
        }
    }

    // recursive solution 
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.right && this.right) {
            this.right.insert(data);
        } else if (data > this.right) {
            this.right = new Node(data);
        }
    }

    // contain
    contain(data) {
        if (this.data === data) {
            return this;
        } 
        if (data < this.data && this.right) {
            return this.right.contain(data);
        } 
        else if (data > this.data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }
    
    
}

// bf traversal 
function bfTraversal(fn) {
    const arr = [this.root];
    while (arr.length) {
        const node = arr.shift();
        arr.push(...node.children);
        fn(node);
    }
}

// df
function dfTraversal(fn) {
    const arr = [this.root];
    while (arr.length) {
        const node = arr.shift();
        arr.unshift(...node.children);
        fn(node);
    }
}

// bf 
function bfTraversal(fn) {
    const arr = [this.root];
    while (arr.length) {
        const node = arr.shift();
        arr.push(...node.children);
        fn(node);
    }
}
//df 
function dfTraversal(fn) {
    const arr = [this.root];
    while (arr.length) {
        const node = arr.shift();
        arr.unshift(...node.children);
        fn(node);
    }
}

// level width 
//    1 
//   2 4
// 9 2   5
// answer [1,2,3] how many nodes in each row

function levleWidth(root) {
    const count = [0];
    const arr = [root, 's'];
    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            count.push(0);
            arr.push('s');
        } else {
            count[count.length - 1]++;
            arr.push(...node.children);
        }
    }
    return count;
}

// sorts 

// bubble sort   - restrict window - 1
// [ 1, 8 , 9, 3]  
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i-1; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j + 1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// merge sort 
// [ 1, 8 , 9, 3]  [ 9, 3 , 2, 6]  

// Merge takes an array and recursively splits in half until array or length 1  
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
    
}
function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

// [1,4,5,2]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let low = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[low]) {
                low = j;
            }
        }

        if (low !== i) {
            const temp = arr[low];
            arr[low] = arr[i];
            arr[i]= temp;
        }
    }
    return arr; 
}

// selection
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        const lesser = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[lesser]) {
                lesser = j;
            }
        }
        if (lesser !== i) {
            const temp = arr[lesser];
            arr[lesser] = arr[i];
            arr[j] = temp;
        }
    }
    return arr;
}




function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}




//   10 
// 6     9
//1 2
// return [1,2,2];
function levelWidth(root) {
    const arr = [root, 's'];
    const count = [0];
   
    while (arr.length > 1) {
         const node = arr.shift();
        if (node === 's') {
            arr.push('s');
            count.push(0);
        } else {
            arr.push(...node.children);
            count[count.length - 1]++;
        }
    }
    return count;
    
}

