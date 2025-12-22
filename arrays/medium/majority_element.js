// 169. Majority Element (Easy)
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
var majorityElement = function(nums) {
    // Brute force, Time complexity(TC): O(n*log n), Space complexity(SC): O(1)
    // sort the array and return the middle element
    // nums.sort((a,b) => a-b)
    // return nums[Math.floor(nums.length/2)]
};
 
const nums = [3,2,3]
// const nums = [2,2,1,1,1,2,2]

console.log(majorityElement(nums))