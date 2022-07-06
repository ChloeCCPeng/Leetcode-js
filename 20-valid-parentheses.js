var isValid = function(s) {
    while (
      s.indexOf("{}") !== -1 || s.indexOf("[]") !== -1 || s.indexOf("()") !== -1) {
      s = s.replace("()", "");
      s = s.replace("{}", "");
      s = s.replace("[]", "");
    }
    return s === "";
  };

//  var isValid = function(s) {
//     const hashMap = {"(":")", "[":"]", "{":"}"};
//     const stack = [];
    
//     for (let ch of s){
//         if(hashMap[ch]){
//             stack.push(hashMap[ch])
//         } else if (stack.length > 0 && stack[stack.length -1] === ch){
//             stack.pop()
//         } else {
//             return false
//         }
//     }
//     return stack.length === 0
// };

// time complexity = O(N)
// space complexity = O(N)
