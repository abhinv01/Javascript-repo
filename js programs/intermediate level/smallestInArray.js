/* Form Smallest Number From Two Digit Arrays
Easy
+10 APs
unsolved
Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.

Example 1:


Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15
Explanation: The number 15 contains the digit 1 from nums1 and the 
digit 5 from nums2.
It can be proven that 15 is the smallest number we can have.
Example 2:


Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
Output: 3
Explanation: The number 3 contains the digit 3 which exists in both arrays.
 */


var minNumber = function(nums1, nums2) {
    universalMin = Number.MAX_VALUE;

    let minVal = nums1.filter((curr,ind) => {
        if(nums2.includes(curr) && curr < universalMin){
            universalMin = curr
            return curr;
        }
    })
    if(minVal[0]) return minVal[0]
    else{
        let min1,min2;
        nums1.sort((a,b)=>a-b)
        nums2.sort((a,b)=>a-b)
        // console.log(nums1,nums2);
        if(nums1[0] === nums2[0]) return nums1[0]
        min1 = `${nums1[0]}${nums2[0]}`
        min2 = `${nums2[0]}${nums1[0]}`
        // console.log(min1,min2);
        return min1 < min2 ? Number(min1) : Number(min2)
    }
};

const nums1 = [3,5,2,6], nums2 = [4,9,7];
// console.log( minNumber(nums1,nums2))