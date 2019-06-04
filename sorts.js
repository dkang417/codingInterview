// colt steele sorting

// shrink window from the right 
function bubbleSort(arr) {
    let noSwaps;
    for (let i = 0; i < arr.length; i++){
        noSwaps = true;
        for (let j = 0; j < arr.length-i-1; j++){
            if([arr[j] > arr[j + 1]]){
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

// select smallest number and put it at begining  - prove me wrong method -
// shrink the window
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            const temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}



// [1,2,9,76,4]


// psudocode
// start by picking the 2nd element in the array
// compare the 2nd element with the one before it and swap if necessary
// continue to the next element and if it is in the incorrect order, iterate through
// the sorted portion (to the left side) to place the element in correct place
// repeat until array is sorted



function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        
        let currentVal = arr[i];
        // work  backwards 
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            // swap 
            arr[j + 1] = arr[j];
        }
        // we found where to put currentVal 
        arr[j + 1] = currentVal;
    }
    return arr;
}


// exploits fact that arrays of 1 or 0 is already sorted
// works by decomposing arrays into smaller arrays of 0 or 1 then merge them 
// big o of mergesort-  O(n log n) 

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}



// quick sort 

// find where the pivot should end up in the selected array 



// pivot helper 
// all values less than pivot are to the left
// all values greater than pivot are to right
// not create a new array
// when done return the index of pivot

// let arr = [ 5,2,1,8,4,7,6,3]  // pivot is 5
// pivot(arr);   returns 4;  the index of where pivot goes

function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;

    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp; 
    }

    for (let i = start + 1; i < arr.length; i++){
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i)   
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}
pivot([4, 8, 2, 1, 5, 7, 6, 3])
// [4, 2, 8, 1, 5, 7, 6, 3]
// [4, 2, 1, 8, 5, 7, 6, 3]
// [4, 2, 1, 3, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// 3 
// [1,2,3,4,5,6,7,8]

