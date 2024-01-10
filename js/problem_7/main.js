/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // let reverse = 0;
    // while(x !== 0) {
    //     let digit = x % 10;
    //     reverse = reverse * 10 + digit;
    //     x = Math.floor(x / 10);
    // }

    // return reverse;

    let reverse = parseInt(x.toString().split("").reverse().join(""));

    if (reverse > Math.pow(-2 , 31) && reverse < Math.pow(2 , 31) -1) {
        // console.log(Math.pow(-2 , 31));
        return (x < 0) ? -reverse : reverse;
    }

    else
        return 0;
};

console.log(reverse(123))
console.log(reverse(93234243999))
// console.log(reverse(-2989823498123))
// console.log(reverse(-123))