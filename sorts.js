// colt steele sorting

// bubble sort
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
// Selection Sort 
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


// Insertion Sort 
// [1,2,9,76,4]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        // go backwards 
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        // go backwards
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let currentVal = arr[i];
        // go backwards
        for (let j = i - 1; j >= 0 && arr[j]>currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
}