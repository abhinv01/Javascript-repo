//find point where 0 stops and 1 starts

// function transitionPoint(arr) {
//     // Write your code inside this function only.
//     let left = 0, right = arr.length-1,target = 1, occurence = undefined
//     while(left <= right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid] === target){
//             occurence = mid
//             right = mid-1
//         }
//         else if(target > arr[mid] ) left = mid + 1
//         else right = mid-1
//     }
//     return occurence ? occurence : -1
// }

// let arr = [0,1,1,1,1,1,1]
// console.log(transitionPoint(arr));


//find missing point
var missingNumber = function(arr) {
    let n = arr.length;
    console.log("arr",arr);
 
    //sort array using cycle sort and put 0 in position of missing number
    for (let i = 0; i < n; i++) {
        console.log("for",arr[i] > 0,arr[i] <= n, arr[arr[i] - 1] !== arr[i]);
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            console.log([arr[arr[i] - 1], arr[i]] , [arr[i], arr[arr[i] - 1]]);
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
        
    }
    console.log("arr",arr);

    //search for missing number
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};
console.log(missingNumber([2,1,4,6,3,5,0,8,7,9,
    
    10]));