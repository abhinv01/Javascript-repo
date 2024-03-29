//return the number which is missing in array and number which is repeated

/* Example 1:
Input: [1, 2, 2, 4]
Output: [2, 3]
Explanation: The duplicated number is 2, and the missing number is 3.
Example 2:
Input: [3, 2, 3, 4, 5]
Output: [3, 1]
Explanation: The duplicated number is 3, and the missing number is 1.
Example 3:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 8]
Output: [8, 9]
Explanation: The duplicated number is 8, and the missing number is 9. */


var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    // for (let i = 0; i <= nums.length -1; i++) {
    //     const num = nums[i];
    //     if (hashmap.has(num)) output.push(num);
    //     if (hashmap.has(num)) hashmap.set(num, [...hashmap.get(num),i]);
    //     else hashmap.set(num, [i]);
    //     maxValue = Math.max(maxValue, num);
    // }

    // console.log(hashmap);
    // for (let i = 1; i < maxValue + 1; i++) {
    //     if (hashmap.get(i).length > 1) {
    //         let len = hashmap.get(i).length
    //         output.push(hashmap.get(i));
    //         break;
    //     }
    // } 

    
 for (let i = 1; i <= nums.length; i++) {
        if(i !== nums[i-1]) output.push(nums[i-1],i)
        
    }

    return output;
};

let nums = [1, 2, 2, 4]
console.log(findErrorNums(nums));

