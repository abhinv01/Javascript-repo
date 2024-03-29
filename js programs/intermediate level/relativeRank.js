/* Relative Ranks
You are given a function findRelativeRanks and an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.
Example 1:
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
Example 2:
Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th]. */


// Worst Case

function worstfindRelativeRanks(score) {
    console.log("worst sc",score);
    debugger;
    // Write your code inside this function only.
    let newScore = [...score]
    newScore.sort((a,b) => b-a)
    let m = [...score]

    m[m.indexOf(newScore[0])] = "Gold Medal"
    m[m.indexOf(newScore[1])] = "Silver Medal"
    m[m.indexOf(newScore[2])] = "Bronze Medal"
    for (let i = 0; i < m.length; i++) {
        if(typeof m[i] === "number" ) {
            m[i] = `${newScore.indexOf(m[i]) +1}`
        }
    }
    return m;

}

// Best Case

function bestfindRelativeRanks(score) {
    console.log("best sc",score);
    // Write your code inside this function only.
    let newScore = [...score]
    newScore.sort((a,b) => b-a)
    // console.log(newScore);
    let m = score.map((element,i) => {
        let rank = newScore.indexOf(element) +1 
        if(rank === 1) return "Gold Medal"
        else if(rank===2) return "Silver Medal"
        else if (rank === 3) return "Bronze Medal"
        else return `${rank}`
    });
    return m
}
let score = [10,3,8,9,4]
console.log(worstfindRelativeRanks(score));
console.log(bestfindRelativeRanks(score));      