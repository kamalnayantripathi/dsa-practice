// 2149. Rearrange Array Elements by Sign (Medium)
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
var rearrangeArray = function(nums) {
    // Brute force: traverse through nums, check for their sign and keep (+,-) pairs in a new array.
    // Time complexity(TC): O(n), Space Complexity(SC): O(n)
    let arr=[],j=0,k=1;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            arr[j]=nums[i]
            j+=2;
        }else{
            arr[k]=nums[i]
            k+=2;
        }
    }
    return arr;
};

// const nums = [3,1,-2,-5,2,-4]
const nums = [-1,1]
console.log(rearrangeArray(nums))