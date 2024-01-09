/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverse = x.toString().split("").reverse().join("");
    return (x == reverse) ? true : false
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));