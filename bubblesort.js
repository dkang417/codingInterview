// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort


// takes in array of numbers- 
// find the largest number in array
// and drag it to the right side
// so we need to shrink the window each inner loop
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
// prove me wrong sort

// from i = 0 < arr length  . indexMin
// assume the elemet at index i is the lowest value
    // for j from i + 1 to end of array
        // see if there is an element with lower val
            // if there is record its index
    // if the index of current element and the index of the lowest
    // element is not the same swap em

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









function mergeSort(arr) {


}

function merge(left, right) {


}



module.exports = { bubbleSort, selectionSort, mergeSort };
