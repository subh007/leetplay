function findLongestSubstringLength(s) {
    let maxLength = 0;
    let currentSubstring = [];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        console.log(currentChar);
        const charIndex = currentSubstring.indexOf(currentChar);
        console.log(charIndex);

        if (charIndex !== -1) {
            currentSubstring = currentSubstring.slice(charIndex + 1);
            console.log(currentSubstring);
        }

        currentSubstring.push(currentChar);
        console.log(currentSubstring);
        maxLength = Math.max(maxLength, currentSubstring.length);
        console.log(maxLength);
    }

    console.log(maxLength);
    return maxLength;
}

// const result1 = findLongestSubstringLength("abcabcbb");
// console.log(result1);

// const result2 = findLongestSubstringLength("bbbbb");
// console.log(result2);

const result3 = findLongestSubstringLength("pwwkew");  
console.log(result3);
