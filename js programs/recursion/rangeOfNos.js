//create an array with range of numbers using recursion
//input start and end value
//output array with elements from start to end


function createRy(start,end,ry){
    if(start > end) return ry
    ry.push(start)
    return createRy(start+1,end,ry)
}

console.log(createRy(1,10,[]));