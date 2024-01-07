/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    while(x !== 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    return reverse;
};

console.log(reverse(123))
console.log(reverse(23234243))
console.log(reverse(989832989823498123))
console.log(reverse(123))