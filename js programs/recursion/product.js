//product of all elements of array

function multiply(ry){
    if(ry.length < 1) return 1;
    
    //return first element multiplied by recursive function call with argument as array whose first element is removed
    return ry[0] * multiply(ry.slice(1))
}

console.log(multiply([1,2,3,4]));