/* Sort Colors
Medium
+10 APs
unsolved
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:
Input:
nums = [2,0,2,1,1,0]

Output:
[0,0,1,1,2,2] */


var sortColors = function(nums) {
    // Your code goes here
    let zero = 0, ones = 0,twos = 0
    for (const element of nums) {
        element === 0 ? zero++ : element === 1 ? ones++ :twos++
        
        
    }
    let arr = [...new Array(zero).fill(0),...new Array(ones).fill(1),...new Array(twos).fill(2)]
    return arr
};
nums = [2,0,2,1,1,0]

console.log(sortColors(nums));


    