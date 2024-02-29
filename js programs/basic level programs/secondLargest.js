let arr = [2,5,3,4,8,9,6]

let max = Math.max(...arr);
let index = arr.indexOf(max);
arr.splice(index,1)
console.log("second highest" ,Math.max(...arr))