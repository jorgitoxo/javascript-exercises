const palindromes = function (str) {
    // compare string char at with item at index in reversed array
    // [\W_] : Matches any non-word character (equivalent to [^a-zA-Z0-9_])
    /* [aA-zZ0-9] : Matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
     /d or [0-9] Matches a digit (equivalent to [0-9]) */
    strippedStr = str.toLowerCase().split("").filter(char => /[aA-zZ0-9]/g.test(char)).join("");
    reversedStr = str.toLowerCase().split("").filter(char => /[aA-zZ0-9]/g.test(char)).reverse().join("");

    return (strippedStr === reversedStr);
};

// Do not edit below this line
module.exports = palindromes;
