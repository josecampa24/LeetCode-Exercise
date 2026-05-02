/**
 * @param {string} s
 * @return {number}
 */

const letter=("Hello World");
var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ");
    const lastWord = words[words.length - 1];
    return lastWord.length;
}

console.log(lengthOfLastWord(letter))