//sort using counting sort
//good for repeated elements

function sortColors(nums) {
    // Write your code inside this function only.
    const myMap = new Map([
        [0, 0],
        [1, 0],
        [2, 0]
    ]);
    let sortedArr = []

    for (const ele of nums) {
        myMap.set(ele,myMap.get(ele) + 1)  
    }

    for (const [key,val] of myMap) {
        let ry = new Array(val)
        ry.fill(key)
        sortedArr = [...sortedArr,...ry]
    }


    return sortedArr

}

let nums = [2,0,2,1,1,1,2,0]
console.log(sortColors(nums));
// console.log(maxCount([1,2,5,4,-9,-5,-4,0,0,0,-9]));


// function maxCount(nums) {
//     // Write your code inside this function only.
//     let pos = 0, neg = 0
//     for (const ele of nums) {
//         if(ele > 0) pos++
//         else if(ele<0)neg++
//     }
//     return pos>neg ? pos : neg

// }