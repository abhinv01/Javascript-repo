/* Greatest Sum Divisible by Three
Medium
+10 APs
unsolved
Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

Example 1:
Input:
nums = [3,6,5,1,8]

Output:
18

Explanation:
Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

Example 2:
Input:
nums = [4]

Output:
0

Explanation:
Since 4 is not divisible by 3, do not pick any number. */


var maxSumDivThree = function(nums) {
    // Your code goes here
    let sum = nums.reduce((acc,curr) => acc+curr,0)
    let maxDiv
    for(let i = sum; i>=0; i--){
        if(i%3 === 0) {
            maxDiv = i
            break}
    }
    return maxDiv


};

// var maxSumDivThree = function(nums) {
//     let N = nums.length;
//     let buckets = [...Array(N + 1)].map(_ => Array(3).fill(0));
//     console.log(buckets);
//     for (let i = 1; i <= N; ++i) {
//         buckets[i] = [...buckets[i - 1]]; 
//         for (let j of [0, 1, 2]) {
//             let sum = nums[i - 1] + buckets[i - 1][j]; 
//             buckets[i][sum % 3] = Math.max(buckets[i][sum % 3], sum); 
//         }
//     }
//     return buckets[N][0]; 
// };

let nums = [3,6,5,1,8]
console.log(maxSumDivThree(nums));