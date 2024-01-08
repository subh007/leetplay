/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // let num = Number(s) // when s = "4193 with words" then return NAN
    // return num;

    let num = parseInt(s)
    return isNaN(num) ? 0 : num;
};

console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987")); // NaN
console.log(myAtoi("-91283472332")); // expected -2147483648