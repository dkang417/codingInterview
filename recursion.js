// recursion 
let tracker = 0; 

let callMe = function () {
    tracker++;
    if (tracker === 3) {
        return 'loops';
    }
    return callMe('anytime');
}

// recursion steps -  

// identify base case
// identify recursive case
// return where appropriate
// write procedures for each case that bring you closer to the base case

var callMyself = function () {
    if () {
        // base case
        return;
    } else {
        // recursive case
        callMyself();
    }
    return;
}; 

const loopNTimes = (n) => {
    if (n <= 1) {
        return 'complete';
    }
    return loopNTimes(n - 1);
};
loopNTimes(3);

function computeFactorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}
