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
    insert(data) {
        if (data > this.data && this.right) {
            this.right.insert(data);
        }
        else if (data > this.data) {
            this.right = new Node(data);
        }
        else if (data < this.data && this.left) {
            this.left.insert(data);
        }
        else if (data < this.data) {
            this.left = new Node(data);
        }
    }
    contians(data) {
        if (data === this.data) {
            return this;
        }
        if (data < this.data && this.left) {
            return this.left.contains(data);
        }
        else if (data > this.data && this.right) {
            return this.right.contains(data);
        }
        return null;
    }
}
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
        else if (data > this.data && this.right) {
            this.right.insert(data);
        }
        else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        if (data === this.data) {
            return this;
        }
        // return a recursive call 
        if (this.data < data && this.right) {
            return this.right.contains(data);
        }
        else if (this.data > data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }
    contains(data) {
        if (data === this.data) {
            return this;
        }
        if (this.data > data && this.left) {
            return this.left.contains(data);
        }
        else if (this.data < data && this.right) {
            return this.right.contains(data);
        }
        return null;
    }



}

function validate(node, min = null, max = null) {
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
        else if (data > this.data && this.right) {
            this.right.insert(data);
        }
        else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        if (this.data === data) {
            return this;
        }
        else if (data < this.data) {
            return this.left.contains(data);
        } else if (data > this.data) {
            return this.right.contains(data);
        }
        return false;
    }
}


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
        else if (data > this.data && this.right) {
            this.right.insert(data);
        }
        else if (data > this.data) {
            this.right = new Node(data);
        }
    }
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




    //       10     insert 40
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
function validate(node, min = null, nax = null) {
    if (min !== null && node.data < min) {
        return false;
    }
    if (max !== null && node.data > max) {
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


// validate if binary search tree 
// recursion solution 

//         10               min     max
//    0           12  
// -1   4      11     20
//                 17    99

// params = node, min = null, max = null, recurse 

function validate(node, min = null, nax = null) {
    if (min !== null && node.data < min) {
        return false;
    }
    if (max !== null && node.data > max) {
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





// we need to have min and max values when we recurse through the node- starts with null
// if there is a min value  and node.data is less than min return false
// if there is a max value and node.data is greater than max reuturn false
// recurse through node.left && !validate passing values
// recurse through node.right && !validate passing values  
// if it passes through all checks return true







//  10
// 5   12  
// params = node, min = null, max = null, recurse 

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    // search through tree. find node with same value and return node.
    // if node doesnt exist return null


    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }

        return null;
    }

}

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
        else if (data > this.data && this.right) {
            this.right.insert(data);
        }
        else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }
}




function validate(node, min = null, max = null) {
    //  20     
    // 10  30 

    // takes in a node, min=null,max=null
    // if min is not null and node.data < min  then return false 
    // if max is not null  and node.data > max then return false 
    // if node.right && !validate(node.right ,node.data, max )
    // if node.left && !validate(node.left, min, node.data)
    // return true

    if (min !== null && node.data < min) {
        return false;
    }
    if (max !== null && node.data > max) {
        return false;
    }
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    return true;
}


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (this.data > data && this.left) {
            this.left.insert(data);
        }
        if (this.data > data) {
            this.left = new Node(data);
        }
        if (this.data < data && this.right) {
            this.right.insert(data);
        }
        if (this.data < data) {
            this.right = new Node(data);
        }
    }



    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data > data && this.left) {
            return this.left.contains(data);
        } else if (this.data < data && this.right) {
            return this.right.contains(data);
        }
        return null;
    }
}
//         10              5  25
//    0           12  
// -1   4      11     20
//                 17    99

function validation(node, min = null, max = null) {
    if (min !== null && node.data < min) {
        return false;
    }
    if (max !== null && node.data > max) {
        return false;
    }
    if (node.left && !validation(node.left, min, node.data)) {
        return false;
    }
    if (node.right && !validation(node.right, node.data, max)) {
        return false;
    }
    return true;
}

function validate(node, min = null, max = null, ) {
    if (min !== null && node.data < min) {
        return false;
    }
    if (max !== null && node.data > max) {
        return false;
    }
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
}


