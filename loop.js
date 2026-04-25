// Given:

// ```js
// const nums = [4, 7, 2, 9];
// ```

// Print every number in the array.

// Expected:
// 4
// 7
// 2
// 9

// const nums = [4,7,2,9]

// for (let i = 0; i < nums.length; i++){
//     console.log(nums[i])
// }

// Q1 (Easy): Sum all numbers
// Given: const nums = [3, 5, 2, 8];
// Return the sum of all numbers
// Expected: 18

// const nums = [3, 5, 2, 8];
// let sum = 0;
// for (let i = 0; i < nums.length; i++){
//     sum = sum + nums[i]
// }
// console.log(sum)

// Q2 (Easy): Count even numbers
// Given: const nums = [1, 2, 3, 4, 5, 6];
// Return how many numbers are even
// Expected: 3

// const nums = [1, 2, 3, 4, 5, 6];
// let count = 0;
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//         count++;
//     }
// }
// console.log(count)

// Q3 (Easy): Find all numbers greater than 5
// Given: const nums = [2, 8, 3, 9, 1, 6];
// Return a NEW array with only numbers > 5
// Expected: [8, 9, 6]

// const nums = [2, 8, 3, 9, 1, 6];
// let newArr = [];

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 5){
//         newArr.push(nums[i])
//     }
// }
// console.log(newArr)

// Q4 (Medium): Find the largest number
// Given: const nums = [4, 12, 2, 9, 5];
// Return the maximum value
// Expected: 12

// const nums = [4, 12, 2, 9, 5];
// let max = -Infinity
// for(i = 0; i < nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i];
//     }
// }
// console.log(max)

// Q5 (Medium): Count occurrences of a number
// Given: const nums = [1, 2, 2, 3, 2, 4, 2];
// Create a function: countOccurrences(arr, target)
// Return how many times 'target' appears
// Expected: countOccurrences(nums, 2) returns 4

// const nums = [1, 2, 2, 3, 2, 4, 2];

// let countOccurrences = (arr, target) => {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOccurrences(nums, 2))