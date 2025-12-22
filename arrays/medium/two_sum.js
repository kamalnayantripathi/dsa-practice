// 1. Two Sum (Easy)
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
var twoSum = function(nums, target) {
    // brute force, Time complexity: O(n*n), Space complexity: O(1)
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i]+nums[j]===target) return [i,j]
    //     }
    // }
    // Optimal solution, TC: O(n), SC: O(n), if multiple collisions occur, hash lookup may also take O(n)
    const obj = {"a": 0};
    console.log(obj["a"])
    for(let i=0; i<nums.length; i++){
        console.log(i,obj[target-nums[i]],obj)
        if(obj[target-nums[i]]!==undefined) return [i,obj[target-nums[i]]];
        if(obj[nums[i]]===undefined) obj[nums[i]]=i;
    } 
};

// let nums = [2,7,11,15], target = 9
// let nums = [3,2,4], target = 6
// let nums = [3,3], target = 6
let nums = [2,5,5,11], target = 10
// let nums = [1,-2,-3], target = -1


console.log(twoSum(nums, target))