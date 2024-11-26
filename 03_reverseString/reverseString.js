const reverseString = function(phrase) {
    let splitWords = phrase.split(" ");
    let reversedArray = [];
    let reversedPhrase = "";

    function flipString (string) {
        let flippedArray = [];
        let flippedString = "";

        for (let i = 0; i < string.length; i++) {
            flippedArray.unshift(string.charAt(i));
        }
        flippedString = flippedArray.join("");
        return flippedString;
    }

    for (const word of splitWords) {
        const flippedWord = flipString(word);
        reversedArray.unshift(flippedWord);
    }

    reversedPhrase = reversedArray.join(" ");
    
    return reversedPhrase;
};

// Do not edit below this line
module.exports = reverseString;
