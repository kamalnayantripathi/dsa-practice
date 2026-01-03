// 229. Majority Element II (Medium)
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

var majorityElement = function(nums) {
    // Brute force: Time complexity(TC): ~O(n*n), Space complexity(SC): ~O(n)
    const ans=[]
    for(let i=0; i<nums.length; i++){
        count=1;
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]===nums[j]) count++
        }
        if(count>Math.floor(nums.length/3)) {
            if(!ans.includes(nums[i])) ans.push(nums[i])
        }
    }
    return ans
};

// const nums = [3,2,3] // Output: [3]
// const nums = [1] // Output: [1]
const nums = [1,2] // Output: [1,2]
console.log(majorityElement(nums))