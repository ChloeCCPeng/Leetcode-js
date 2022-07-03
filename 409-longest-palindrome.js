var longestPalindrome = function(s) {
    let count = 0
    let set = new Set();
    
    for (char of s) {
        if (set.has(char)) {
            count += 2;
            set.delete(char)
        } else {
            set.add(char)
        }
    }
    return count + (set.size > 0? 1 : 0)
};