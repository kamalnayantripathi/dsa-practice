// 268. Missing Number (Easy)
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

var missingNumber = function(nums) {
    // Brute force, sort the array and check one by one for missing number.
    // Time complexity(TC): O(n.log(n)+n), space complexity(SC): O(1)
    // nums.sort((a,b)=>a-b)
    // for(let i=0; i<nums.length;i++){
    //     if(i!==nums[i]) return i;
    // }
    // return nums.length;

    // Optimal solution using sum. TC: O(n), SC: O(1)
    // let n=nums.length, sum=0;
    // let total=(n*(n+1))/2;
    // for(let i=0;i<nums.length;i++){
    //     sum+=nums[i];
    // }
    // return total-sum;

    // Another optimal solution using XOR. TC: O(n), SC: O(1)
    let xor1=0, xor2=0;
    for(let i=0; i<nums.length; i++){
        xor2 ^= nums[i]
        xor1 ^= i;
    }
    xor1 = xor1 ^ nums.length;
    return xor1 ^ xor2;
};

// const nums = [3,0,1]
// const nums = [0,1]
const nums = [9,6,4,2,3,5,7,0,1]

console.log(missingNumber(nums))