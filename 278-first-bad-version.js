 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let last = n;
        let first = 1
        let fristBadVersion = -1
        
        while (first <= last) {
            const middle = Math.floor((first+last)/2)
            if (isBadVersion(middle)) {
                
            }
        }
    };
};
