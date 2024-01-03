var longestPalindrome = function(s) {
    let output = "";

    if (s.length <= 1) {
        return s;
    } else if (s.length == 2) {
        if (s[0] == s[1]) {
            return s;
        } else {
            return s[0];
        }
    } else {
        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                let substring = s.substring(i, j);
                if (isPalindrome(substring) && substring.length > output.length) {
                    output = substring;
                }
            }
        }
    }

    return output;
};


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd")); 
