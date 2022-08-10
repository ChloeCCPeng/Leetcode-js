
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length -1
    while (right - left !== 1) {
        let mid = Math.floor((left + right)/2)
        if (target = nums[mid]) {
            right = mid
        } else {
        left = mid
        }
    }
    return right
};

// var solution = function(isBadVersion) {
//     return function(n) {
//         let left = 0, right = n;
//         while (right - left !== 1) {
//             let mid = Math.floor((left + right) / 2)
//             if (isBadVersion(mid)) {
//                 right = mid
//             } else {
//                 left = mid
//             }
//         } 
//         return right
//     };
// };

// var searchInsert = function(nums, target) {
//     var right = nums.length - 1;
//     var left = 0;
//     while (left < right) {
//         var mid = Math.floor((left + right) / 2);
//         if (target === nums[mid]) {
//             return mid;
//         } else if (target < nums[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1
//         }
//     }
    
//     return target > nums[left] ? left + 1 : left;
// };
