//print all possible subsets of given array
//input [2,3]
//output [],[3],[2],[3,2]
//note [3,2] and [2,3] are same


function subsets(nums) {
let result = [],temp = []

function recur(nums,i){
    if(i===nums.length){
        return result.push([...temp])
    }
    temp.push(nums[i])
    recur(nums,i+1)
    temp.pop()
    recur(nums,i+1)

}
recur(nums,0)
return result
}

console.log(subsets("()"));
