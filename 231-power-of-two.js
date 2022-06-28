/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let i = 1;
    
    while (i < n){
        i *= 2;
    }
    
    return i ===n;
};

// Time complexity: O(log N)
// Space complexity: O(1)