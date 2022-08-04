/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let middle = Math.floor((left + right) / 2))
    
    while (target != middle) {
        return nums[middle]
        } if (target > middle) {
            left = nums[middle]
        } else if (target < middle) {
            right = nums[middle]
        }
    return nums[middle]
};

// var search = function(nums, target) {
// let first = 0
// let last = nums.length - 1

// while(first <= last){
//     let mid = Math.floor(((first + last) / 2))
//     if(nums[mid] < target){
//         first = mid + 1
//     }else if(nums[mid] > target){
//         last = mid - 1
//     } else{
//         return mid
//     }
// }
// return - 1
// };
