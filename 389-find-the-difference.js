var findTheDifference = function(s, t) {
    let stack = {};
    
    for (let char of s) {
        if (stack[char] === undefined) {
            stack[char] = 1;
        } else {
            stack[char] ++;
        }
    }
    
    for (let char of t) {
        if (stack[char] !== undefined && stack[char] > 0) {
            stack[char] --;
        } else {
            return char
        }
    }
};

// time
// space