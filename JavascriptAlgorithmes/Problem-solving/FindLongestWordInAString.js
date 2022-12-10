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

/* function longestWordIn(sentence) {
    let longestWord = sentence.split("  ").reduce(function(longest, current) {
        console.log(longest)
        console.log(current)
        console.log('#'.repeat(10))
        return current.length > longest.length ? current : longest;
    })

    return longestWord;
} */

// Third solution using arrow function

function longestWordIn(sentence) {
    let longestWord = sentence
    .split("  ")
    .reduce((l, c) => (c.length > l.length ? c : l))
}

console.log(longestWordIn("In Programming We Love Elzero Academy Tooooo Much"))