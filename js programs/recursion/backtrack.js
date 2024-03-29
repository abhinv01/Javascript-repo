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

// console.log(subsets("()"));

function permute(nums) {
    const result = [];
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push(current.slice()); // Add a copy of the current permutation to the result
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!current.includes(nums[i])) {
                current.push(nums[i]); // Choose
                backtrack(current);    // Explore
                current.pop();         // Unchoose
            }
        }
    }
    
    backtrack([]);
    return result;
}

// Test
const num = 123;
const permutations = permute(Array.from(String(num), Number));
console.log(permutations);




