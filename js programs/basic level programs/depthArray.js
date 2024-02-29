//given is an array which has depth in it, count the depth of an array and return flat array

let testRy = [1,2,[3,4,[5,6],7,[8,[9,91,[]]],10],11,12]

let pointer = 0;
let depth = 1;

//check for array within array by traversing and when array is found execute array.flat() and increment depth.
function flattenArray(ry){
    if(Array.isArray(ry)){
        if(ry.length === 0) return("empty array");
        else{
            while(ry[pointer] != undefined){
                if(Array.isArray(ry[pointer])){
                    ry = ry.flat();
                    depth++
                }
                pointer++;
            }
            console.log("negative ",ry.at(-1))
            return ([ry,depth])
        }
    }
}

console.log(flattenArray(testRy))
