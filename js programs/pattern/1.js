//print below pattern right angled
/* 
*
**
***
****
*****
******
******* 
*/

for (let i = 0; i <= 7; i++) {
    // for (let j = 0; j < i; j++) {
    //    console.log("*");        
    // }
    let arr = new Array(i)
    arr = arr.fill("* ")
    str = arr.join("")
    console.log(str);        
    
}

let len = 7
for (let i = 0; i < len; i++) {
    let str = ""
    for (let j = 0; j < len-i ; j++) {
        str += "*"
    }    
    console.log(str);
}