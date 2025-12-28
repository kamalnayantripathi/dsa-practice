// 128. Longest Consecutive Sequence (Medium)
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
    // Brute force approach: Sort the array, count the consecutives using loop and return.
    // Time complexity(TC): O(n*logn + n), Space complexity(SC): O(1)
    // if(nums.length===0) return 0;
    // nums.sort((a,b) => a-b)
    // let consecutive=1,val=nums[0],max=consecutive;
    // for(let i=1; i<nums.length; i++){ // [0,1,1,2]
    //     if(nums[i]===val) continue;
    //     if(val+1===nums[i]) {
    //         val++; 
    //         consecutive++;
    //         max=Math.max(max, consecutive)
    //     }else {
    //         max=Math.max(max, consecutive)
    //         consecutive=1; 
    //         val=nums[i]
    //     }
    // }
    // return max

    // Optimal solution: Time complexity: O(n+2n), Space complexity: O(n) assuming that no collisions happen in hashing
    let hash=new Map(),max=0;
    for(let i=0; i<nums.length; i++) hash.set(nums[i],1);
    console.log(hash); 
    for(const obj of hash.keys()){
        console.log(obj,hash.get(obj-1))
        if(hash.get(obj-1)!==undefined) continue;
        else{
            let x=obj,count=1;
            while(hash.get(++x)) {count++};
            max=Math.max(max,count);
        }
    }
    return max;
};

// const nums = [100,4,200,1,3,2] // Output: 4
// const nums = [0,3,7,2,5,8,4,6,0,1] // Output: 9
// const nums = [1,0,1,2] // Output: 3
// const nums = [0,-1] // output: 2
const nums = [1] // output: 1

console.log(longestConsecutive(nums))