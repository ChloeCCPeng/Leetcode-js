/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    console.log(nums, nums.length)
    
    while (left <= right) {
    let middle = Math.floor(((left + right) / 2))
        
        if (target > nums[middle]) {
            left = middle + 1
        } else if (target < nums[middle]) {
            right = middle -1
        } else {
            return middle            
        }
    }
    // return -1
};
