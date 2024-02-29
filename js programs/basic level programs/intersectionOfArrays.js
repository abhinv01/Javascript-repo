//find intersection of arrays


let arr1 = [1]
let arr2 = [1,2,5,6,8,3]

function intersection(arr1,arr2){
    let inter = []
    /* using forEach */
    // arr1.forEach(element => {
    //     if(arr2.includes(element)) inter.push(element)
    // }); 

    /* using filter */
    inter = arr1.filter((ele,ind) => {
        return arr2.includes(ele)
    })
    return inter
}

console.log(intersection(arr1,arr2))


//for union of 2 arrays
let union  = new  Set([...arr1,...arr2])
console.log(Array.from(union))