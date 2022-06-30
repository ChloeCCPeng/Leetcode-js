/**
 * @param {string} s
 * @return {string}
 */
 function reverseVowels(s) {
    let vowels = {};
    for (let char of "aeiouAEIOU") {
        vowels[char] = true;
    }
    
    const characters = s.split("");
    
    let left = 0;
    let right = s.length -1;
    
    while (left < right) {
        while (left < right && !(s[left] in vowels)) {
            left += 1
        }
        
        while (left < right && !(s[right] in vowels)) {
            right -= 1
        }
        
        swap (characters, left, right);
        left += 1;
        right -= 1;
    }
    return characters.join('')
};

    function swap (arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp
    }
    
// Time complexity: O(n) where n is the number of characters in the string.
// Space complexity: O(n) is the same length as the original string.