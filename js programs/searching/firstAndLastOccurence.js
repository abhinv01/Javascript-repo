/* First and Last Position of Element in Sorted Array 
In the ancient kingdom of Numeria, there was a mystical array that held great powers. Legend had it that this array contained the secrets of finding the elusive target value. The array was known for its unique property of being sorted in non-decreasing order, which made it a perfect ground for seekers to unravel its mysteries.
Deep within the kingdom, there lived a skilled adventurer named Aria, known for her prowess in deciphering ancient algorithms. When news spread of the mystical array and the searchRange function, Aria embarked on a quest to harness its power and utilize the searchRange algorithm to find the starting and ending positions of a given target value.
The searchRange function takes an array of integer nums sorted in non-decreasing order, a target value target, and returns a pair of integers representing the starting and ending positions of the target value in the array.
If the target value is not found in the array, the function returns [-1, -1].
Aria is determined to write an algorithm that utilizes the searchRange function and achieves a runtime complexity of O(log n).
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 
Constraints:
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non-decreasing array.
-10^9 <= target <= 10^9
 
Hints:
Consider using the binary search algorithm to find the target value in the sorted array. 
To find the starting and ending positions of the target value, modify the binary search algorithm slightly. Instead of stopping when the target value is found, continue the search to find the leftmost and rightmost occurrences of the target value.
Keep track of the leftmost and rightmost indices where the target value is found during the binary search. Update these indices whenever a match is found in the left or right half of the array. */


var searchRange = function(nums, target) {
    let start = 0, end = nums.length-1
    let arrLeft = [],arrright=[]
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(target===nums[mid]) {
            arrLeft.push(mid)
            end = mid-1
        }
        else if(target > nums[mid]) start = mid+1
        else end = mid-1
    }
    let left= 0, right = nums.length-1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(target===nums[mid]) {
            arrright.push(mid)
            left = mid+1
        }
        else if(target > nums[mid]) left = mid+1
        else right = mid-1
    }
    let leftMost = arrLeft[arrLeft.length-1]
    let rightMost = arrright[arrright.length-1]
    if(leftMost && rightMost){
        return [leftMost,rightMost]
    }
    else if(leftMost && !rightMost) {
        return [leftMost,leftMost]
    }
    else if(!leftMost && rightMost) {
        return [rightMost,rightMost]
    }
    else return [-1,-1]
};
let nums = [5,7,7,8,8,10], target = 7
console.log(searchRange(nums,target));