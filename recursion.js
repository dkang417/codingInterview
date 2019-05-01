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