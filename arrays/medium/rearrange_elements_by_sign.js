// 2149. Rearrange Array Elements by Sign (Medium)
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
var rearrangeArray = function(nums) {
    // Brute force: traverse through nums, check for their sign and keep (+,-) pairs in a new array.
    // Time complexity(TC): O(n), Space Complexity(SC): O(n)
    // let arr=[],j=0,k=1;
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i]>0){
    //         arr[j]=nums[i]
    //         j+=2;
    //     }else{
    //         arr[k]=nums[i]
    //         k+=2;
    //     }
    // }
    // return arr;

    // Alternative solution: Time complexity: ~O(n*n), Space complexity: O(1)
    // Will result into TLE on Leetcode or for big values of nums.length like 10^5;
    // let c=0,i=1;
    // while(c<nums.length){
    //     console.log(c,i)
    //     if((c%2===0 && nums[c]>0) || (c%2!==0 && nums[c]<0)) i=++c;
    //     else if(c%2===0 && nums[c]<0){
    //         if(nums[i]>0) swap(nums,i,c++)
    //         else swap(nums,i,c)
    //     }else if(c%2!==0 && nums[c]>0){
    //         if(nums[i]<0) swap(nums,i,c++)
    //         else swap(nums,i,c)
    //     }
    //     i++;
    // }
};
// const nums = [-2,-3,-4,1,2,3]
// const nums = [3,1,-2,-5,2,-4]
// const nums = [-1,1]
// const nums = [28,-41,22,-8,-37,46,35,-9,18,-6,19,-26,-37,-10,-9,15,14,31]
// const nums = [1,-2,-3,-4,5,6]
// rearrangeArray(nums)
console.log(nums.length)

function swap(nums, i, j){
    const temp = nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
    console.log(i,j,"swapped")
}