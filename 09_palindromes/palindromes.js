const palindromes = function (word) {
    const procString = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const revString = procString.split("").reverse().join("");
    return procString == revString;
}

// Do not edit below this line
module.exports = palindromes;
