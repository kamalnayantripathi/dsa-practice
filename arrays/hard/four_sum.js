// 18. 4Sum (Medium)
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.
var fourSum = function(nums, target) {
    // Brute approach: TC: O(n^3), SC: ~O(2*n) or O(n+ans.length)
    console.log(nums,target)
    // const map = new Map()
    // for(let i=0; i<nums.length; i++){
    //     map.set(nums[i],i)
    // }
    // console.log(map)
    // const set = new Set()
    // const ans=[]
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         for(let k=j+1; k<nums.length; k++){
    //             const val=target-(nums[i]+nums[j]+nums[k])
    //             const temp = map.get(val)
    //             if((i===temp || j===temp || k===temp)) continue;
    //             if(temp!==undefined){
    //                 const sorted = [nums[i],nums[j],nums[k],val].sort((a,b)=>a-b)
    //                 if(set.has(sorted.join(""))) continue;
    //                 ans.push([nums[i],nums[j],nums[k],val])
    //                 set.add(sorted.join(""))
    //                 // console.log(val,ans)
    //             }
    //         }
    //     }
    // }
    // return ans

    // Optimal solution: TC: O(n^3), SC: O(n)
    nums.sort((a,b) => a-b)
    const map = new Map(), ans=[]
    for(let i=0; i<nums.length; i++){ 
        map.set(nums[i],i)
    }
    console.log(map)
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                const val=target-(nums[i]+nums[j]+nums[k])
                const l = map.get(val)
                if(l===undefined || k>=l) continue;
                ans.push([nums[i],nums[j],nums[k],val])
                while(nums[k+1]===nums[k]) k++
            }
            while(nums[j+1]===nums[j]) j++
        }
        while(nums[i+1]===nums[i]) i++
    }
    return ans
};
 
// const nums = [1,0,-1,0,-2,2], target = 0 // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// const nums = [2,2,2,2,2], target = 8 // Output: [[2,2,2,2]]
// nums = [1, 2, 3, 4] ,target = 100 // Expected: []
// nums = [0, 0, 0, 0, 0, 0], target = 0 // Expected: [[0, 0, 0, 0]]
// nums = [-2, -2, -1, -1, 1, 1, 2, 2], target = 0
// Expected:[ [-2, -1, 1, 2],[-2, -2, 2, 2], [-1, -1, 1, 1]]
// nums = [-5, -4, -3, -2, -1], target = -10 // Expected: [[-4, -3, -2, -1]]
// nums = [1, 2, 3, 4, 5], target = 10 // Expected: [[1, 2, 3, 4]]
// nums = [1, 2, 3], target = 6// Expected: []
// nums = [1, 0, -1, 0, -2, 2, 2], target = 2 // Expected: [  [-2, 0, 2, 2], [-1, 0, 1, 2] ]
nums = [-3, -1, 0, 2, 4, 5], target = 2 // Expected: [[-3, -1, 2, 4]]
// nums = [1000000000, 1000000000, 1000000000, 1000000000] ,target = 4000000000
// Expected: [[1000000000, 1000000000, 1000000000, 1000000000]]

// nums = [-1000000000, -1000000000, 0, 0, 1000000000, 1000000000] ,target = 0
// Expected: [[-1000000000, -1000000000, 1000000000, 1000000000],[-1000000000, 0, 0, 1000000000]]

console.log(fourSum(nums,target))