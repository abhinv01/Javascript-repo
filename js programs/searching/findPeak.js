//find peak in unsorted array at logn time complexity


function findPeakElement(nums) {
    // Write your code inside this function only.
    let peak = -Infinity
    for(let i = 0; i< nums.length;i++){
        if(nums[i]>peak) peak = nums[i]
    }
    return peak

}
let nums =  [7,2,1,3,5,6,4]
console.log(findPeakElement(nums));