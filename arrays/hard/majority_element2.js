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
    // const ans=[], map = new Map();
    // for(let i=0; i<nums.length; i++){
    //     map.set(nums[i], (map.get(nums[i]) || 0)+1)
    // }
    // for(const [key, val] of map){
    //     if(val>Math.floor(nums.length/3)) ans.push(key)
    // }
    // return ans

    // optimal approach, Moore's voting algorithm
    // TC: O(2*n), SC: O(1)
    console.log(nums)
    let a,c1=0,b,c2=0;
    for(let i=0; i<nums.length; i++){
        if(c1===0 && nums[i]!==b){
            a=nums[i];
            c1++;
        }else if(c2===0 && nums[i]!==a){
            b=nums[i];
            c2++;
        }
        else if(nums[i]===a)c1++;
        else if(nums[i]===b)c2++;
        else{
            c1--;
            c2--;
        }
    }
    const min = Math.floor(nums.length/3), ans=[]
    let count1=0,count2=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===a)count1++;
        else if(nums[i]===b) count2++;
    }
    if(count1>min) ans.push(a)
    if(count2>min) ans.push(b)
    return ans;
};

// const nums = [3,2,3] // Output: [3]
const nums = [1, 1, 1, 2, 3] // Output: [1]
// const nums = [3, 1, 3, 1, 1] // Output: [1]
// const nums = [3,2,1,2,2,3,4,3] // Output: [3,2]
// const nums = [1,2,2,2,3,4,5,6] // Output: [2]
// const nums = [1] // Output: [1]
// const nums = [1,2] // Output: [1,2]
// const nums = [2,2,2,2,2] // Output: [2]
console.log(majorityElement(nums))





