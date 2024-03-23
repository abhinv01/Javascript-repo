//bubble sort


//selection sort

function bubble(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
let arr = [3,4,2,8,6,4,9]
console.log(bubble(arr))
