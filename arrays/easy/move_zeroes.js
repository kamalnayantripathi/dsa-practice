// 283. Move Zeroes (Easy)
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. 
// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    // two pointer approach
    let j=0,k=1;
    while(j<nums.length){
        if(nums[j]!==0){
            j++;
        }else if(k>=nums.length){ 
            nums[j]=0;
            j++;
        }else if(nums[j]===0 && nums[k]!==0){
            nums[j]=nums[k];
            nums[k]=0;
            j++;
        }
        k++;
    }
};

nums = [0,1,0,3,12]
// nums = [0]

moveZeroes(nums)
console.log(nums)