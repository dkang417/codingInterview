// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // insert method   RECURSION SOLUTION 
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        }
        else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

        //        10
    //     5    15
    //    0         20
    //  -5 3        
    // does this tree contain '3' ? -   RECURSION SOLUTION 


    contains(data) {
        if (this.data === data) {
            return this;
        }
        if (this.data < data && this.right) {
            return this.right.contains(data);
        }
        else if (this.data > data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }

}

// validate if binary search tree 
// recursion solution 

//  10
// 5   12  
// params = node, min = null, max = null, recurse 

function validate(node, min=null, max=null) {

    if (max !== null && node.data > max) {
        return false;
    }
    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;

}

