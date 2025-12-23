// 53. Maximum Subarray (Medium)
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

var maxSubArray = function(nums) {
    // Brute force: Use two for loops, start from 1st element & keep adding till the end.
    // NOTE: This will result into TLE(Time Limit Exceeded) on Leetcode.
    // let sum=0,max=nums[0];
    // for(let i=0; i<nums.length; i++){
    //     sum=nums[i];
    //     max=Math.max(max, sum)
    //     for(let j=i+1; j<nums.length; j++){
    //         sum+=nums[j]
    //         max=Math.max(max, sum)
    //     }
    // }
    // return max;

    // if sum of the element < 0 and next element > 0 then we can set sum=next element  
    // The idea is if the sum of ongoing subarray is < 0, then it can't be the largest subarray
    // Time complexity(TC): O(n), Space complexity: O(1)
    // This also is known as Kadane's algorithm
    let sum=nums[0],max=nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i]>sum && sum<0){
            sum=nums[i]
            max=Math.max(sum,max)
        }else{ 
            sum+=nums[i];
            max=Math.max(sum,max)
        }
    }
    return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
// const nums = [1]
// const nums = [5,4,-1,7,8]
// const nums = [-2,1]
// const nums = [-1,0,-2]

console.log(maxSubArray(nums))

// Kadane's algorithm says: 
// At every index i, Should I extend the previous subarray or start fresh from nums[i]?

// var maxSubArray = function(nums) {
//     let sum = nums[0];
//     let max = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         sum = Math.max(nums[i], sum + nums[i]);
//         max = Math.max(max, sum);
//     }

//     return max;
// };