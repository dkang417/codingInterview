// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative solution - linear run time-  O(n)
function fib(n) { 
    // first 2 numbers in fib array has to be 0 and 1
    const result = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        const a = result[result.length - 1]; // 1 
        const b = result[result.length - 2]; // 0 
        result.push(a + b); // 1 
    }
    return result[result.length-1];
}

// first create an array with 0 and 1 
// create a for loop starting at 2 less than n 
    // create 2 variables a and b    last 2 items in array
    // add to the array a+b 

// return last item in array 

function fib(n) {
    // create an array with 0,1 
    const arr = [0, 1];
    for (let i = 2; i <= n; i++){
        const a = arr[arr.length - 1];
        const b = arr[arr.length - 2];
        arr.push(a + b);
    }
    // return last val in array
    return arr[arr.length - 1];
}



// iterative solution for fibb 
function fib(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++){
        const a = arr[arr.length - 1];
        const b = arr[arr.length - 2];
        arr.push(a + b);
    }
    return arr[arr.length - 1];
}



// recursion solution
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

//memoize 

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);




// MEMOIZE
//solution for memoize 
// takes a function that returns a function
// fn.apply(this,args) need to use apply method

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}


function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 2) + fib(n - 1);
    
}
const fib = memoize(slowFib);



// memoize 

// take in a function and return a function using .apply()

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const value = fn.apply(this, args);
        cache[args] = value;
        return value; 
    }
}
function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);


// fib iterative solution 
function fib(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++){
        const a = arr[arr.length - 1];
        const b = arr[arr.length - 2];
        arr.push(a + b);
    }
    return arr[arr.length - 1];
}

// fib recursive solution 
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}


// fib memoize  solution 
function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const value = fn.apply(this, args);
        cache[args] = value;
        return value; 
    }
}


function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);


