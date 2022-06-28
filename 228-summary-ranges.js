/**
 * @param {number[]} nums
 * @return {string[]}
 
var summaryRanges = function(nums) {
};
 */

const summaryRanges = nums => {
    let result = [];
    
    for ( let start = 0, end = 0; end < nums.length; end++, start = end) {
        while (nums[end] === nums[end+1]-1){
            end++
        } 
        if (nums[end] !== nums[start]) {
                result.push (nums[start] + "->" + nums[end])
        } else {
            result.push (""+nums[end])
        }
    }
    return result;
}



// Time complexity: O(n)
// Space complexity: O(1)
