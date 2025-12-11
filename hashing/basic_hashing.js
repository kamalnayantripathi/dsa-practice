// Problem Statement: Given an array, we have found the number of occurrences of each element in the array.

const arr = [2,2,2,3,4,4,2,10,5,10,15,15,10,5];
const freq = new Map();
for(let x of arr){
    freq.set(x, (freq.get(x) || 0) +1 )
}
console.log(freq)

// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: Map(3) { 10 => 3, 5 => 2, 15 => 1 }
// Explanation: 10 occurs 3 times in the array
// 	      5 occurs 2 times in the array
//               15 occurs 1 time in the array

// Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

// supposing the above array is the given array
let result={};
for(const [key, val] of freq){
    console.log(key,val)
    if(!result["highest"]) result["highest"]=[key,val];
    if(!result["lowest"]) result["lowest"]=[key,val];
    if(result["highest"][1]<val) result["highest"]=[key,val];
    if(result["lowest"][1]>val) result["lowest"]=[key,val];
}
console.log(result["highest"],result["lowest"])