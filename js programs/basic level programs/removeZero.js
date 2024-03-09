//remove zeroes from given array whithout using extra space for array size ie if arr.length = 10 it should remain so



function pushZerosToEnd(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != 0)
            arr[count++] = arr[i]
    }
    return arr.slice(0,count)
}


console.log(pushZerosToEnd([1,2,3,0,0,0,0,0,0,0,0,0,5,0,8,9,3,6]))