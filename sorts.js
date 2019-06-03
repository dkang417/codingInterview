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
