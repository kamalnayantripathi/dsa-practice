// 560. Subarray Sum Equals K (Medium)
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

var subarraySum = function(nums, k) {
    // brute force
    let count=0;
    console.log(nums, "k", k)
    for(let i=0; i<nums.length; i++){
        if(nums[i]===k){ 
            count++;
        }
        let j=i+1, sum=nums[i];
        console.log("i",i, "sum", sum)
        while(j<nums.length){
            sum += nums[j]
            console.log("j",j,"sum",sum)
            if(sum===k){
                count++;
            }
            j++;
        }
        console.log("count",count)
    }
    return count;
};
// const nums = [1,1,1]
// const nums = [1,2,3]
// const nums = [1,2,1,2,1]
const nums = [1,-1,0]
console.log(subarraySum(nums,0))
