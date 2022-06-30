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