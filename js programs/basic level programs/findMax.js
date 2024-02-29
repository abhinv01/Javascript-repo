// find maximum nummber in array without using Math.max()


let arr = ["a","b","c"]
let max = null;

if(arr[0] !== undefined ){
    if(arr.length < 2) max = arr[0];
    else{
        max = arr[0]
        arr.forEach(element => {
            element > max ? max = element : null
        });
    }
}
console.log(`${max} is largest`)
