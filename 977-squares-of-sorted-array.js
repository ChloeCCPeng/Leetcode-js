
// var sortedSquares = function(nums) {
//     // use two pointers
//     // create a new array
//     const result = new Array(nums.length);
//     let left = 0, 
//         right = nums.length - 1;
    
// 	// don't want to rearrange the array, so iterating the array in descending order 
//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (Math.abs(nums[left]) < Math.abs(nums[right])) {
//             result[i] = nums[right] ** 2
//             right--;
//         } else {
//             result[i] = nums[left] ** 2
//             left++;
//         }
//     }
    
//     return result;
// };



var sortedSquares = function (A) {
	A = A.map(x => x * x);
	A.sort((a, b) => a - b);

	return A;
};
