// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// width = bf traversal 

function levelWidth(root) {
    const arr = [root, 's'];
    const counters = [0];

    while (arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counter.length - 1]++;
        }
    }

    return counters;
}



module.exports = levelwidth;

// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// if question asks for width- we are thinking BreathFirst traversal

// create 2 arrays 
// counters array - the array we want to return 
// arr  - the queue we use to iterate through our tree


function levelwidth(root) {
    const counters = [0];
    const arr = [root, 's']
    
    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }
    return counters;
}
// create 2 arrays 
// one array for the answers 
// one array to keep track of all nodes plus 's'
// while arr.length > 1  
    // take out first node in arr
    // if the node === 's'
        //push another 0 into counters
        //push s back into the end of the array
    // else   push all of the nodes children into array
             // increment counters at the counter.length-1

//       20 
//   3   4    18
// 1,4, 6      6
// [1. 3. 4]
function levelWidth(root) {
    const arr = [root, 's'];
    const counter = [0];
    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            counter.push(0);
            arr.push('s');
        } else {
            counter[counter.length - 1]++;
            arr.push(...node.children);
        }
    }
    return counter;
}





function traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
        const node = arr.shift();
        arr.push(...node.children);
        fn(node);
    }
}
function traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
        const node = arr.shift();
        arr.unshift(...node.children);
        fn(node);
    }
}

function levelWidth(root) {
    const arr = [root, 's'];
    const counter = [0];
    while (arr.length > 1) {
        const node = arr.shift();
        if (node==='s') {
            counter.push(0);
            arr.push('s');
        } else {
            counter[counter.length - 1]++;
            arr.push(...node.children);
        }
    }
    return counter;
}


// binary Search Tree 

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if(data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
}
