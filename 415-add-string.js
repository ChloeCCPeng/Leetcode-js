 var addStrings = function(num1, num2) {
    let i = num1.length -1;
    let j = num2.length -1;
    let result = [];
    let carry = 0;
    
    while (i >= 0) {
        if (j >= 0) {
            const sum = Number(num1[i]) + Number(num2[j]) + carry;
            let remainder = sum % 10
            
            if (sum > 9) carry = 1
            else carry = 0
            result.push(remainder)
            i--;
            j--;
            
        } else {
            const sum = Number(num1[i]) + carry;
            let remainder = sum % 10;
            
            if (sum > 9) carry = 1
            else carry = 0
            result.push(remainder)
            i--
        }
    }
        
    while (j >= 0) {
        const sum = Number(num2[j]) + carry;
        let remainder = sum % 10
        
        if (sum > 9) carry = 1
        else carry = 0;
        result.push(remainder)
        j--
    }
    if (carry) result.push(carry)
    return result.reverse().join('')
};
