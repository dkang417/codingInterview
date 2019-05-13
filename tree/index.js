// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        // const node = new Node(data);
        // this.children.push(node);
        this.children.push(new Node(data));
    }
   
}

class Tree { 
    constructor() {
        this.root = null;
    }
    // bf and df almost the same except where you are putting the children at
    traverseBF(fn) {
        // stick top node into new array 
        const arr = [this.root];
        // while array has something in it  
        while (arr.length) {
            // take out the first element in the array.  shift() - removes first element
            const node = arr.shift();
            //  take all of its children and push it in the array
            arr.push(...node.children);
            fn(node);
        }            
    }

    // Depth - First Traversal - goes all the way down as quickly as possible
    // goes down to the depth 
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            // unshift adds to the front of array
            arr.unshift(...node.children);
            fn(node);
        }
    }

}

// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;


module.exports = { Tree, Node };








class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }

    // call remove - given some data, look at each child of the current node
    // and remove any node with data === data 

    remove(data) {
        // filter -array method
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }

}

const n = new Node('a');
n.add('b');
// this creates a new node a with children node b


class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children = new Node(data);
    }
    // this.children = [2,4,1]
    // remove(2)
    remove(data) {
        this.children =  this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {

    constructor() {
        this.root = null;
    }
    // takes a function and passes the function on every node within the tree  
    // Breath first - start at top, iterate undernearth, then next level. left to right
    // create an empty array and add root node 
    // while arr.length 
        // take out the FIRST element(shift) - 
        //take all of its children and stick it into the end of array(push)
        // call the function on this first node 
    

    // create an array with root node
    //while there is something inside the array
        // take out the first item in the array - shift
        // push to the end of the array all of its children 
        // fn(node)
    
    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
       

    }


    traverseBF(fn) {
        // root node into a new array
        const arr = [this.root];
        while (arr.length) {
            // take out first item in array
            const node = arr.shift();
            // push all the children of the first item taken out of array
            arr.push(...node.children);
            // call the function on this node 
            fn(node);
        }
    }
}
