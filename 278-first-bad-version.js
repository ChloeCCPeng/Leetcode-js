var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n
        while(left < right) {
            const mid = Math.floor((right + left) / 2)
            if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return right
    };
};


var solution = function(isBadVersion) {
    return function(n) {
      let r = n;
      let l = 0;
      while(l <= r){
        let mid = Math.floor((l+r)/2)
        let version = isBadVersion(mid);
        if(version !== isBadVersion(mid+1)){
           return mid+1
        }else if(version === false){
          l = mid+1
        }else{
          r = mid-1
        }
      }
    };
};
