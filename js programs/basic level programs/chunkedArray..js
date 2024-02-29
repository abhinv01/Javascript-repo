//write a function to create a chunked array of given size
//eg [1,2,3,4,5,6,7,8,9], n = 3 then output = [[1,2,3],[4,5,6][7,8,9]]



let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let n = 10;
// let newArr = []
// let chunkedArr = []
// for (const i of arr) {    
//     chunkedArr.push(i) 
//     if(chunkedArr.length === n){
//         newArr.push(chunkedArr)
//         chunkedArr = []
//     }
// }
// chunkedArr.length ? newArr.push(chunkedArr) : null

// console.log(!undefined)



const chunks = ((arr,n) => {
    const chunked = [];

    for(let elem of arr){
    let last = chunked[chunked.length -1];
    console.log("last is",last)
    
        if(!last || last.length === n)
           {
            chunked.push([elem])
            console.log("[elem]",[elem])
            console.log("!last , last.length",!last || last.length === n)
            console.log("chunked",chunked)
           } 
        else {last.push(elem)
            console.log("last",last)

            
        }
    }

    return chunked;
})([1,2,12,3,2,6,-9,0],3)

console.log({chunks})