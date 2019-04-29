

function linearSearch(list, item) {
    let index = -1;
    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i;
        }
    });
    return index;
}


// implement linear search( takes 2 arguments- list , 
//  item you are looking for
// linearSearch([1, 4, 2, 90, 103], 90);

// forEach(listitem, i) 
// index = -1;
function linearSearch(arr, num) {
    index = -1;
    arr.forEach((listitem, i) => {
        if (listitem === num) {
            index = i;
        }
    });
    return index;
}



