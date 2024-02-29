//find duplicate element in an array
"use strict";

let arr = [2,3,4,6,9,6,4]

const duplicates = arr.filter((ele,index,ry) => {
    return ry.indexOf(ele) !== index
})
console.log(40%2*3)