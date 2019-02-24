// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '#_ '
//       '##'
//   steps(3)
//       '#_ _ '
//       '##_ '
//       '###'
//   steps(4)
//       '#_ _ _ '
//       '##_ _ '
//       '###_'
//       '####'

steps 
// iterate through rows until less n
// iterate through cols less than n
// if col <= row add # to string
// else add ' '

for (var i = 0; i < n; i++) {
    let stair = '';
    for (var j = 0; j < n; j++){
        if (j <= i) {
            stair += '#';
        } else {
            stair += ' ';
        }
    }
    console.log(stair);
}
// from 0 to n (iterate through rows)
//  create an empty string 'stair'
    // from 0 to n (iterate through col)
        // if the current col is equal to or less than current row
            // add a '#' to 'stair'
        // else 
            // add a ' ' to stair
    // console.log 'stair'

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}



// recursion solution 
// steps(3);
// function printNumber(n, row=0, stair = '') {
//     if (n === row) {
//         return;
//     }

//     if (n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }

//     if (stair.length <= row) {
//         stair += '#';
//     } else {
//         stair += '';
//     }
//     steps(n, row, stair);
// }
