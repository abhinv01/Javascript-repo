/*Generate Parentheses
Easy
+10 APs
unsolved
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input:
n = 3
Output:
["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input:
n = 1
Output:
["()"]*/


// var permute = function(nums) {
//     let res = []
 
//      let iterate = (arr,temp) =>{
//          if(arr.length == 0){
//              res.push(temp)
//              return;
//          }
//          for(let i =0;i<arr.length;i++){
//              iterate(arr.filter((num,idx)=>idx !=i),[...temp,arr[i]])
//          }
//      }
//      iterate(nums,[])
//      return res 
//  };
// console.log(permute([1,2,3]));


var permute = function(nums) {
    let res = []
 
    let iterate = (arr,temp) =>{
        if(arr.length===0){
            res.push(temp)
            return
        }

        for (let i = 0; i < arr.length; i++) {
            iterate(arr.filter((ele,ind)=>ind != i),[...temp,arr[i]])            
        }
    }
    iterate(nums,[])
    return res 
 };
console.log(permute([1,2,3]));