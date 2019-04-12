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

function selectionSort(arr) {


}

function mergeSort(arr) {


}

function merge(left, right) {


}

module.exports = { bubbleSort, selectionSort, mergeSort };
