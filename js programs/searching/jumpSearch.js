function jumpSearch(arr, target) {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;
  
    // Finding the block where the target may exist
    while (arr[Math.min(step, n) - 1] < target) {
      prev = step;
      step += Math.floor(Math.sqrt(n));
  
      if (prev >= n) {
        return -1; // Target not found
      }
    }
  
    // Performing a linear search within the block
    while (arr[prev] < target) {
      prev++;
  
      if (prev === Math.min(step, n)) {
        return -1; // Target not found
      }
    }
  
    // Check if the target is found
    if (arr[prev] === target) {
      return prev; // Index of the target element
    }
  
    return -1; // Target not found
  }
  
  // Example usage
  var arr = [1, 2, 3, 4, 5, 6, 7];
  var target = 5;
  console.log(jumpSearch(arr, target));
  
  // Output
//   4 (index of the target element)



var findKthLargest = function(nums, k) {
    // Your code goes here
    nums = nums.sort((a,b) => b-a)
    return nums[k-1]
};
let nums = [3,2,1,5,6,4], k = 2
console.log(findKthLargest(nums,k));


str = "hello"
let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
    console.log(str.charCodeAt(i))
}
  