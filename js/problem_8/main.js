/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // let num = Number(s) // when s = "4193 with words" then return NAN
    // return num;

    let num = parseInt(s);

    if (isNaN(num)) {
        return 0;
    }

    const max_int = Math.pow(2, 31) - 1;
    const min_int = Math.pow(-2, 31);
    
    if (num > max_int) {
        return max_int;
    } else if (num < min_int) {
        return min_int;
    } else {
        return num;
    }
};

console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987")); // NaN
console.log(myAtoi("-91283472332")); // expected -2147483648