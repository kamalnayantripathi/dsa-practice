// 169. Majority Element (Easy)
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
var majorityElement = function(nums) {
    // Brute force 1, Time complexity(TC): O(n*n), Space complexity: O(1)
    // for(let i=0; i<nums.length; i++){
    //     let count=1;
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[j]===nums[i]) count++;
    //         if(count>Math.floor(nums.length/2)) return nums[i]
    //     }
    // }

    // Brute force 2, Time complexity(TC): O(n*log n), Space complexity(SC): O(1)
    // sort the array and return the middle element
    // nums.sort((a,b) => a-b)
    // return nums[Math.floor(nums.length/2)]

    // Better approach, Time complexity(TC): O(n), Space complexity(SC): O(n)
    // const freq = new Map();
    // const required = Math.floor(nums.length/2)
    // for(let i=0; i<nums.length; i++){
    //     freq.set(nums[i], (freq.get(nums[i]) || 0)+1)
    //     // console.log(freq)
    //     if(freq.get(nums[i])>required) return nums[i];
    // }

    // Optimal approach, TC: O(n), SC: O(1)
    // Moore's voting algorithm, take first variable as majority, count++ if we get the same var else dcount--, if count==0, we again change the majority value to the next element.
    // Key idea is that the majority element will have count>=1
    let count=0, val;
    for(let i=0; i<nums.length; i++){
        if(count===0){
            val=nums[i];
            count++;
            continue;
        }
        if(val===nums[i]) count++;
        else count--
    }
    return val;
};
 
// const nums = [3,2,3]
const nums = [2,2,1,1,1,2,2]

console.log(majorityElement(nums))