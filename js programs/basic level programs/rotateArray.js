function rotateArray(arr, k) {
    // Your code goes here
    originalArr = [...arr]
    length = arr.length
    let newArr = [] 
    for (let i = 0; i < k; i++) {
        if(arr.length !== 0){
            newArr.unshift(arr.pop(-1))
        }
        else{
            arr = [...newArr]
            newArr.unshift(arr.pop(-1))
        }
    }
    if(newArr.length >= length) return newArr.slice(0,length)
    else {
        return([...newArr,...originalArr.slice(0,(originalArr.length - newArr.length))])
    }
}

console.log(rotateArray([1,2,3,4,5,6],2))



