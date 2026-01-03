// 229. Majority Element II (Medium)
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

var majorityElement = function(nums) {
    // Brute force: Time complexity(TC): ~O(n*n), Space complexity(SC): ~O(n)
    // const ans=[]
    // for(let i=0; i<nums.length; i++){
    //     count=1;
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i]===nums[j]) count++
    //     }
    //     if(count>Math.floor(nums.length/3)) {
    //         if(!ans.includes(nums[i])) ans.push(nums[i])
    //     }
    // }
    // return ans

    // Using maps
    const ans=[], map = new Map();
    for(let i=0; i<nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0)+1)
    }
    for(const [key, val] of map){
        if(val>Math.floor(nums.length/3)) ans.push(key)
    }
    console.log(map)
    return ans
};

// const nums = [3,2,3] // Output: [3]
// const nums = [1] // Output: [1]
// const nums = [1,2] // Output: [1,2]
const nums = [2,2,2,2,2] // Output: [2]
console.log(majorityElement(nums))