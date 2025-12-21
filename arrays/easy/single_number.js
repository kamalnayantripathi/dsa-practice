// 136. Single Number (Easy)
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    // Brute force, time complexity: O(n*n) and space complexity: O(n)
    let checked=[];
    for(let i=0;i<nums.length;i++){
        let found=false;
        if(checked.includes(nums[i])) continue;
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
                checked.push(nums[j]) 
                found=true;
                break;
            }
        }
        if(!found) return nums[i];
    }
};

// const nums = [2,2,1]
const nums = [4,1,2,1,2]
// const nums = [1]

console.log(singleNumber(nums))