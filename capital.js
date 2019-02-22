// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// first create an empty array for the words
// create for loop through the array and
// split the string by spaces .split(' ')
// for each word in array
// uppercase first letter + rest of string minus first letter (slice)
// push result into words array and return it

//   capitalize('a short sentence') --> 'A Short Sentence'



function capitalize(str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
    
}

//steps to solve:
// make an empty array
//split the input string by spaces to get an array
//for each word in the array
    //uppercase the first letter of the word
    //join first letter with rest of the string
    // push result into words array
//join words into a string and return 

