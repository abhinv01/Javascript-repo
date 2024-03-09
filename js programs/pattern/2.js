//print pattern 
      /*  
       *
      ***
     *****
    *******
   *********
  ***********
*/ 
let str = ""
let max = 10
for (let i = 0; i < max; i++){ 
    for (let j = 0; j < max-(i+i); j++) {
        str += " "        
    }
    for (let j = 0; j < i; j++) {
        str += "*"        
    }
    str+="\n"
    

}

console.log(str)



