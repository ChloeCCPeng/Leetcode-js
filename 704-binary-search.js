
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums-1;
    let middle = (right - left) / 2;
    
    if (middle == target) {
        return nums[middle]
        } else if (target > middle) {
            left = nums[middle]
        } else if (target < middle) {
            right = nums[middle]
        }
    return nums[middle]
};
