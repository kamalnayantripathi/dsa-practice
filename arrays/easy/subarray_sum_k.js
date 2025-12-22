// 560. Subarray Sum Equals K (Medium)
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

var subarraySum = function(nums, k) {
    // brute force, Time complexity(TC): O(n*n), Space Complexity(SC): O(1)
    // let count=0;
    // console.log(nums, "k", k)
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i]===k){ 
    //         count++;
    //     }
    //     let j=i+1, sum=nums[i];
    //     console.log("i",i, "sum", sum)
    //     while(j<nums.length){
    //         sum += nums[j]
    //         console.log("j",j,"sum",sum)
    //         if(sum===k){
    //             count++;
    //         }
    //         j++;
    //     }
    //     console.log("count",count)
    // }
    // return count;

    // Optimal solution, we can use objects or hash maps. TC: O(n), SC: O(n), worst case TC maybe O(n*n)
    // let sumArr = new Map();    // using hash maps
    let sumArr = {}     // using objects
    let sum=0, count=0;
    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
        if(sum===k) count++;
        // using hashmaps
        // if(sumArr.get(sum-k)!==undefined) count=count+sumArr.get(sum-k);
        // sumArr.set(sum, (sumArr.get(sum) || 0) + 1);
        // using objects
        if(sumArr[sum-k]!==undefined) count=count+sumArr[sum-k];
        sumArr[sum] = (sumArr[sum] || 0) + 1;
    }
    console.log(sumArr)
    return count;
};
// const nums = [1,1,1], k=2;
// const nums = [1,2,3], k=3;
// const nums = [1,2,1,2,1], k=3;
// const nums = [1,-1,0], k=0;
const nums = [0,0,0,0,0,0,0,0,0,0],k=0;
console.log(subarraySum(nums,k))
