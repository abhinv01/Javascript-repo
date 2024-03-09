/* Flip Game
You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.
Write a JavaScript function findMove that takes a string as input and calculates all the possible states of the string after a valid move has been made and return the states in an array of strings.
Example 1:
Input: "++++"
Output: ["--++", "+--+", "++--"]
Example 2:
Input: "++-++"
Output: ["---++", "++---"]
Note:
If there is no valid move, return an empty list [].

basically list of all possible first move the first move of player
*/


function findMove(s) {
    // Write your code inside this function only.
    let moves = []
    for (let i = 0; i < s.length; i++) {
        if(s[i]==="+" && s[i+1] === "+"){
            moves.push(s.slice(0,i)+"--" + s.slice(i+2))
        }
    }
    return moves

}

console.log(findMove("++-++"))