/*  
Fair Candy Swap 
Alice and Bob have a different total number of candies. You've function fairCandySwap. You are given two integer arrays  aliceSizes  and  bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.
Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.
Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.
Example 1:
Input: aliceSizes = [1,1], bobSizes = [2,2]
Output: [1,2]
Example 2:
Input: aliceSizes = [1,2], bobSizes = [2,3]
Output: [1,2]
 
Constraints:
1 <= aliceSizes.length, bobSizes.length <= 10^4
1 <= aliceSizes[i], bobSizes[j] <= 10^5
Alice and Bob have a different total number of candies.
There will be at least one valid answer for the given input.
 
Hints:
Iterate through Alice's candy boxes, and for each box, iterate through Bob's candy boxes. Calculate the difference in the total number of candies between Alice and Bob.
Iterate through Alice's candy boxes again, and for each box, check if the difference in the total number of candies can be compensated by swapping a box from Bob's candies.
 
*/



// we calculate the target amount of candy that Bob should have in order to make the total candies equal between Alice and Bob. This is calculated using the formula:
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceTotal = aliceSizes.reduce((acc, val) => acc + val, 0);
    const bobTotal = bobSizes.reduce((acc, val) => acc + val, 0);
    equalAmount = (aliceTotal + bobTotal)/2
    const bobMap = new Map();
    
    for (let i = 0; i < bobSizes.length; i++) {
        bobMap.set(bobSizes[i], i);
    }

    for (let i = 0; i < aliceSizes.length; i++) {
        
        let bobMustHave = equalAmount - (aliceTotal - aliceSizes[i]);
        if(bobMap.has(bobMustHave))
        return [aliceSizes[i], bobMustHave];
    }


}; 
let   aliceSizes = [1,2], bobSizes = [2,3]

console.log(fairCandySwap(aliceSizes,bobSizes));