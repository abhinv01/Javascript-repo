    /* Asteroid Collision
In a distant asteroid belt, there existed a row of asteroids. Each asteroid had its unique characteristics: a size represented by an integer value, a direction indicated by the sign of the value, and the ability to collide with one another based on their characteristics. To simulate these collisions, we can use the asteroidCollision function with a functional argument arr. The asteroids traveled at a constant speed, making their way through the vast expanse of space.
The asteroidCollision function takes an array of integers, arr representing the sizes and directions of the asteroids. It analyzes the paths of the asteroids, identifying collision points and handling the outcomes of these collisions according to the specified rules. If a smaller asteroid encounters a larger one, the smaller asteroid succumbs to the more giant asteroid's force and explodes. When two asteroids of the same size collide head-on, both asteroids disintegrate.
It's crucial to note that asteroids moving in the same direction never meet, ensuring they peacefully travel side by side without disturbances.
The goal of using the asteroidCollision function is to determine the state of the asteroids after all collisions have occurred. By considering the sizes and directions of the asteroids and simulating their interactions, we can unveil the aftermath of these celestial encounters.
Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10. */


// Worst Case

function worstasteroidCollision(asteroids) {
    const stack = [];
    for (const asteroid of asteroids) {
        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
                stack.pop();
            }
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
                stack.pop();
            }
        }
    }

    return stack;
}


// Best Case

function bestasteroidCollision(asteroid) {
    let arr = [...asteroid]
    // Write your code inside this function only.
    let length = arr.length
    for (let i = length-1; i >= 0; i--){
        if(arr[i] < 0){
            if(i!=0 && Math.abs(arr[i]) > Math.abs(arr[i-1])) arr.splice(i-1,1)
            else if(i!=0 && Math.abs(arr[i]) < Math.abs(arr[i-1])) arr.splice(i,1)
            else if(i!=0 && Math.abs(arr[i]) === Math.abs(arr[i-1])) arr.splice(i-1,2)
        }


        length = arr.length
    }
    return arr
}

let  asteroids = [5,10,-5]
console.log(bestasteroidCollision(asteroids));

// let  asteroids = [10,2,-5]
console.log((worstasteroidCollision(asteroids)));
