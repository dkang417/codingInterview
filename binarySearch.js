
// [2,3,6,90,103], 90
//check the middle, then move to right or left , if not there return -1
function binarySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        if (list[guess] === item) {
            return guess;
        }
        else {
            if (list[guess] < item) {
                // move to right
                min = guess + 1;
            } 
            else {
                // move to left 
                max = guess - 1;
            }
        }

    }
    return -1;
}

binarySearch([2, 3, 6, 90, 103], 90);


binarySearch([2, 3, 6, 90, 103], 90);

// check the middle of the array
// while min is less than or equal to max
    // if guess is num return guess
    // else check if guess is less than num then min is guess + 1
        // else max is guess - 1
// return - 1 

function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length;
    let guess;
    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        if (arr[guess] === num) {
            return guess;
        } else {
            if (arr[guess] < num) {
                min = guess + 1;
            } else {
                max = guess - 1;
            }
        }
    }
    return -1;
}




