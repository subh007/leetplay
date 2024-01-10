var convert = function(s, numRows) {
    if(numRows === 1 || s.length <= numRows) {
        return s;
    }

    const rows = Array.from({length : numRows}, () => []);
    let currentRow = 0;
    let direction = 1;

    for(let char of s) {
        rows[currentRow].push(char);

        if(currentRow === 0) {
            direction = 1;
        }

        else if(currentRow === numRows - 1) {
            direction = -1;
        }

        currentRow += direction;
    }

    // console.log(rows[0][0]);
    return rows.flat().join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));  