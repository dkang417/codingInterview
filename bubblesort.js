// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort


// takes in array of numbers- 
// find the largest number in array
// and drag it to the right side
// so we need to shrink the window each inner loop

// solution: 
// 2 for loops.. push highest number to right by swapping if j is > than j+1 



// bubble sort
function bubbleSort(arr) {
// 2 nested for loops, n^2 complexity 
    for (let i = 0; i < arr.length; i++) {
        // minus i minus 1 to restrict the window each iteration
        for (let j = 0; j < (arr.length-i-1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }    
    }
    return arr;
    
}


// selection sort 
// prove me wrong sort - index i is lowest number. if not swap.

// from i = 0 < arr length  . indexMin
// assume the elemet at index i is the lowest value
    // for j from i + 1 to end of array
        // see if there is an element with lower val
            // if there is record its index
    // if the index of current element and the index of the lowest
    // element is not the same swap em

    // [3,4,1,6,2]
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let indexMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }

        if (indexMin !== i) {
            let lesser = arr[indexMin];
            arr[indexMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;

}





// recursion solution with 2 functions 

function mergeSort(arr) {


}

// [-30,22] [0,97]
// create results array
// while there are still elements in both arrays
    // if the first elem the left half is less than first in right half
        // shift the element from left into a 'result' arr
    // else 
        // shift the element from right into a result arr
// take everything from the arr that still has stuff init and put in results

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



module.exports = { bubbleSort, selectionSort, mergeSort };
