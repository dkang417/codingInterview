
// implement linear search( takes 2 arguments- list , 
//  item you are looking for
// linearSearch([1, 4, 2, 90, 103], 90);

// forEach(listitem, i) 
// index = -1;


function linearSearch(list, item) {
    let index = -1;
    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i;
        }
    });
    return index;
}


function linearsearch(arr, num) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num) {
            return i;
        }
        return -1;
    }
}

