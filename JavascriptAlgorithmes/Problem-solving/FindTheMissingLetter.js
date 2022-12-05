function findMissingLetterIn(givenLetters) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let start = alpha.indexOf(givenLetters[0])

    for (let i = 0; i < givenLetters.length; i++) {
        // console.log(givenLetters[i]); // Loop on given letters
        // console.log(alpha[start + i]); // Loop on alpha
        // console.log('###')

        if (givenLetters[i] !== alpha[start + 1]) {
            return alpha[start + 1]
        }
    };

    return "No Missing Letter In Sequence"
};

console.log(findMissingLetterIn("abcdeghi")) // f
console.log(findMissingLetterIn("defgi")) // h
console.log(findMissingLetterIn("xyz")) // No Missing Letter In Sequence