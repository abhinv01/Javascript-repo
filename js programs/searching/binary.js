var search = function(nums, target) {
    let left = 0, right = nums.length -1

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target) return mid
        else if(nums[mid] < target ) left = mid+1
        else right = mid-1
    }
    return -1
};
let nums = [-11,2,3,5,7,8,9]
console.log(search(nums,-11))




//function to find index of numbers whose sum is target
function twoSum(nums, target) {
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      console.log("complement ",complement)
      if (map.has(complement)) {
        console.log("map.has(complement) ",[map.get(complement), i]);
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
      console.log("after set",map);
    }
  
    return null;
  }
  nums = [4, 2, 5, 17, 9];
  let target = 11;
  let result = twoSum(nums, target);
  console.log(result);
  
  // Output
//   [1, 4]
