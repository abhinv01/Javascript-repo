/* Largest Number
Medium
+10 APs
unsolved
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:
Input:
nums = [10,2]

Output:
"210"

Example 2:
Input:
nums = [3,30,34,5,9]

Output:
"9534330" */


var largestNumber = function(nums) {
    // Your code goes here
    nums = nums.join("").split("")
    nums.sort((a,b)=>Number(b)-Number(a))
    return nums.join("")  
};
let nums = [3,30,34,5,9]
console.log(largestNumber(nums));

]
