// First solution:

/* function longestWordIn(sentence) {
    let splArray = sentence.split("  ");
    let longestLen = 0;
    let longestWord;


    for (let i = 0; i < splArray.length; i++) {
        if (splArray[1].length > longestLen) {
            longestLen = splArray[i];
            longestLen = splArray[i].length;
        }
    }

    return splArray;
} */

// Second solution using rediuce

function longestWordIn(sentence) {
    let longestWord = sentence.split("  ").reduce(function(longest, current) {
        return current.legth > longest.length ? current : longest;
    })

    return splArray;
}

console.log(longestWordIn("In Programming We Love Elzero Academy Tooooo Much"))