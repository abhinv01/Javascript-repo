//check if 2 arrays are equal

let arr1 = [1,2,5,6,9,3]
let arr2 = [1,2,5,6,8,3]


checkEquality = (arr1,arr2) => {
    let isTrue;
    if(arr1.length !== arr2.length) return false

    isTrue = arr1.every((val) =>  {if(arr2.indexOf(val) > -1) return true }
    )
    return isTrue
}

console.log(checkEquality(arr1,arr2))