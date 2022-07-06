var findDisappearedNumbers = function(nums) {
    var missing = [];
     for (var i = 1; i<= nums.length; i++){
        if (!nums.includes(i)) {
            missing.push(i)
        }
    }
    return missing;
}




// var findDisappearedNumbers = function (nums) {

//     let result = [];
//     let nums2 = [];
//     nums2.length = nums.length
    
//     for ( let i = 0; i < nums.length; i++) {
//         nums2[nums[i] -1] = nums[i]
//         }
//         for (let i = 0; i < nums2.length; i++) {
//             if (!nums2[i]) {
//                 result.push(i+1)
//             }
//         }
//     return result
// };