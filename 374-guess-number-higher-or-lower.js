const guessNumber = (n) => {
    
    let start = 1, end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) /2);
        let result = guess(mid);
        
        if (result === 0) {
            return mid;
        }
        if (result === 1) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }    
};

// time complexity: O(log2 n) because of binary search
// space complexity: O(1) no extra space is used