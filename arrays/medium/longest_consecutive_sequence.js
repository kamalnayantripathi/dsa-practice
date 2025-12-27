// 128. Longest Consecutive Sequence (Medium)
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
    // Brute force approach: Sort the array, count the consecutives using loop and return.
    // Time complexity(TC): O(n*logn + n), Space complexity(SC): O(1)
    if(nums.length===0) return 0;
    nums.sort((a,b) => a-b)
    let consecutive=1,val=nums[0],max=consecutive;
    for(let i=1; i<nums.length; i++){ // [0,1,1,2]
        if(nums[i]===val) continue;
        if(val+1===nums[i]) {
            val++; 
            consecutive++;
            max=Math.max(max, consecutive)
        }else {
            max=Math.max(max, consecutive)
            consecutive=1; 
            val=nums[i]
        }
    }
    return max
};

const nums = [100,4,200,1,3,2] // Output: 4
// const nums = [0,3,7,2,5,8,4,6,0,1] // Output: 9
// const nums = [1,0,1,2] // Output: 3

console.log(longestConsecutive(nums))