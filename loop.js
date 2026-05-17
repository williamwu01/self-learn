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

// Q6 (Medium): Compare two arrays
// Given: const arr1 = [1, 2, 3]; const arr2 = [1, 2, 3];
// Return true if arrays are identical, false otherwise
// Expected: true
// Hint: Check length first, then compare each element

// const arr1 = [1, 2, 3]; 
// const arr2 = [1, 2, 3];

// function checker(a, b) {
//     if(a.length !== b.length){
//         return false;
//     } else {
//         for(let i = 0; i < a.length; i++){
//             if(a[i] !== b[i]){
//                 return false 
//             }
//         }
//     }
//     return true;
// }
// console.log(checker(arr1, arr2))

// Q7 (Hard): Find pairs that sum to a target
// Given: const nums = [2, 5, 3, 8, 1, 4]; target = 9
// Return an array of pairs [a, b] that add up to target
// Expected: [[5, 4], [3, 8]] (or similar valid pairs)
// Hint: Use nested loops - loop through each number, then check if (target - num) exists

// const nums = [2, 5, 3, 8, 1, 4]; 
// const target = 9


// function totalVal(arr, target) {
//     let pairs = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 pairs.push([ arr[i], arr[j] ]);
//             }
//         }
//     } return pairs;
// }
// console.log(totalVal(nums, target))

// Q8 (Hard): Remove duplicates while maintaining order
// Given: const nums = [1, 2, 2, 3, 1, 4, 2];
// Return a NEW array with duplicates removed (first occurrence kept)
// Expected: [1, 2, 3, 4]
// Hint: For each number, check if it already exists in your result array

// const nums = [1, 2, 2, 3, 1, 4, 2];

// let newArr = [];
// for(let i = 0; i < nums.length; i++){
//     if(!newArr.includes(nums[i])){
//         newArr.push(nums[i])
//     }
// }
// console.log(newArr)

// Q9 (Hard): Calculate frequency map
// Given: const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// Return an object showing how many times each word appears
// Expected: { apple: 3, banana: 2, cherry: 1 }
// Hint: Create an empty object, loop through array, add/increment properties

// const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// let wordCount = {};
// for(let i = 0; i < words.length; i++){
//     if(!wordCount[words[i]]){
//         wordCount[words[i]] = 1 
//     } else { 
//         wordCount[words[i]]++;
//     }
// }
// console.log(wordCount)

// Q9.I (Hard): Group words by their first letter
// Given: const words = ['apple', 'banana', 'apricot', 'cherry', 'blueberry', 'avocado'];
// Return an object where the keys are the first letters of the words, and the values are arrays of words that start with that letter.
// Expected: { a: ['apple', 'apricot', 'avocado'], b: ['banana', 'blueberry'], c: ['cherry'] }
// Hint: Use the first letter of each word as the key in the object.

// const words = ['apple', 'banana', 'apricot', 'cherry', 'blueberry', 'avocado'];
// let keys = {};

// for(let i = 0; i < words.length; i++){
//     const firstChar = words[i].charAt(0);
//     if(keys[firstChar[i]] !== words[i].charAt(0)){
//         keys[firstChar] = []; // intializes the array 
//     }
//     console.log(keys)
// }

// Q9.II (Hard): Find the most frequent word
// Given: const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// Return the word that appears the most times in the array.
// Expected: 'apple'
// Hint: Use an object to count occurrences, then find the key with the highest value.
// const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// let MostWord = {}
// for(let i = 0; i < words.length; i++){
//     if(!MostWord[words[i]] ){
//         MostWord[words[i]] = 1 
//     } else {
//         MostWord[words[i]]++
//     }
// } 
// console.log(MostWord) 

// Q9.III (Hard): Count the number of unique words
// Given: const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// Return the number of unique words in the array.
// Expected: 3
// Hint: Use an object to track words, then count the keys in the object.
// const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// let uniqueWords = {}

// for(let i = 0; i < words.length; i++){
//     if(!uniqueWords[words[i]]){
//         uniqueWords[words[i]] = true 
//     }
// }
// const uniqueCounter = Object.keys(uniqueWords).length
// console.log(uniqueCounter)

// Q9.IV (Hard): Group words by length
// Given: const words = ['apple', 'banana', 'apricot', 'cherry', 'blueberry', 'avocado'];
// Return an object where the keys are word lengths, and the values are arrays of words with that length.
// Expected: { 5: ['apple'], 6: ['banana', 'cherry'], 7: ['apricot', 'avocado'], 9: ['blueberry'] }
// Hint: Use the length of each word as the key in the object.
// const words = ['apple', 'banana', 'apricot', 'cherry', 'blueberry', 'avocado'];

// let Arr = {}

// for(let i = 0; i < words.length; i++){
//     const wordCount = words[i].length

//     if(!Arr[wordCount]){
//         Arr[wordCount] = []
//     }

//     Arr[wordCount].push(words[i])
// }
// console.log(Arr)

// ===== LEVEL 4: CHALLENGING PATTERNS =====

// Q10 (Hard): Find unique pairs that sum to a target
// Given: const nums = [2, 5, 3, 8, 1, 4, 5]; target = 9
// Return an array of unique pairs [a, b] that add up to target
// Expected: [[5, 4], [8, 1]]
// Hint: Use a Set to track numbers you've already seen to avoid duplicates
// const nums = [2, 5, 3, 8, 1, 4, 5]; 
// const target = 9;

// const uniqueNums = [...new Set(nums)]
// const sortedNums = uniqueNums.toSorted()

// let a = 0;
// let b = sortedNums.length - 1;
// let result = []

// while ( a < b ){
//     const sum = sortedNums[a] + sortedNums[b]

//     if(sum === target){
//         result.push([sortedNums[a], sortedNums[b]])
//         a++;
//         b--;
//     } else if (sum < target){
//         a++;
//     } else {
//         b--;
//     }
// }

// console.log(result)

// Q11 (Hard): Count the number of pairs that sum to a target
// Given: const nums = [2, 5, 3, 8, 1, 4]; target = 9
// Return the count of pairs that add up to the target
// Expected: 2
// Hint: Use nested loops to count pairs, but don't store them
// const nums = [2, 5, 3, 8, 1, 4]; 
// const target = 9;
// let count = 0; 

// const unqiueSortedNums =  [...new Set( nums.toSorted())]

// let a = 0 
// let b = unqiueSortedNums.length - 1 

// while( a < b){
//     const sum = unqiueSortedNums[a] + unqiueSortedNums[b];

//     if(sum === target){
//         count++; a++; b--;
//     } else if ( sum < target){
//         a++;
//     } else {
//         b--;
//     }
// }

// console.log(count)

const nums = [7, 2, 4, 6, 3, 5, 1];
const target = 10;

// ===== LEVEL 5: ADVANCED CHALLENGES =====

// Q12 (Advanced): Rotate an array
// Given: const nums = [1, 2, 3, 4, 5]; k = 2;
// Rotate the array to the right by k steps.
// Expected: [4, 5, 1, 2, 3]
// Hint: Use nested loops or manually shift elements.

// Q13 (Advanced): Find all unique triplets that sum to zero
// Given: const nums = [-1, 0, 1, 2, -1, -4];
// Return an array of triplets [a, b, c] such that a + b + c = 0
// Expected: [[-1, -1, 2], [-1, 0, 1]]
// Hint: Use nested loops and avoid duplicate triplets.

// Q14 (Advanced): Spiral matrix traversal
// Given: const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// Return an array of elements in spiral order.
// Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Hint: Use loops to traverse the matrix layer by layer.

// Q15 (Advanced): Longest consecutive sequence
// Given: const nums = [100, 4, 200, 1, 3, 2];
// Return the length of the longest consecutive elements sequence.
// Expected: 4 (sequence: [1, 2, 3, 4])
// Hint: Sort the array and count consecutive numbers.

// Q16 (Advanced): Implement a basic calculator
// Given: const expression = "3+5 / 2";
// Evaluate the mathematical expression (only +, -, *, /).
// Expected: 5 (integer division)
// Hint: Use loops to parse the string and evaluate step by step.


// ===== TESTING YOUR SOLUTIONS =====
// Uncomment sections below as you solve them

// Test Q1
// const nums1 = [3, 5, 2, 8];
// console.log("Q1 Sum:", yourSumFunction(nums1)); // Expected: 18

// Test Q2
// const nums2 = [1, 2, 3, 4, 5, 6];
// console.log("Q2 Even count:", yourCountEvenFunction(nums2)); // Expected: 3

// Test Q3
// const nums3 = [2, 8, 3, 9, 1, 6];
// console.log("Q3 Greater than 5:", yourFilterFunction(nums3)); // Expected: [8, 9, 6]

// ... continue testing as you solve more
