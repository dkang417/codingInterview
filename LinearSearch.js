

function linearSearch(list, item) {
    let index = -1;
    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i;
        }
    });
    return index;
}

linearSearch([1, 4, 2, 90, 103], 90);

