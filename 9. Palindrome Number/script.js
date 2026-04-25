/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const x1 = x.toString().split("").reverse().join("");
    if (x.toString() === x1){
    return true;
}
else{
    return false ;
}
};

console.log(isPalindrome(24));