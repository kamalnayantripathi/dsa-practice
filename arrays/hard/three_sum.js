// 15. 3Sum (Medium)
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {
    // Brute force, Time complexity(TC): ~O(n^3)(TLE on leetcode), Space complexity(SC): O(1)
    // console.log(nums)
    // const ans=[];
    // for(let i=0; i<nums.length; i++){
    //     for(let j=0; j<nums.length; j++){
    //         for(let k=0; k<nums.length; k++){
    //             console.log(i,j,k)
    //             if(k===i || k===j || i===j) continue;
    //             if(nums[i]+nums[k]+nums[j]===0) {
    //                 const temp = [nums[i],nums[j],nums[k]]
    //                 if(!alreadyExists(ans,temp)) ans.push(temp)
    //                 console.log(temp,ans)
    //             }
    //         }
    //     }
    // }
    // return ans;

    // alternate approach, TC: O(n^2), SC: ~O(2*n) -> Will run on leetcode
    // console.log(nums)
    // const map = new Map()
    // for(let i=0; i<nums.length; i++){ 
    //     map.set(nums[i],i)
    // }
    // console.log("map",map)
    // const set=new Set(), ans=[]
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         const val = map.get(-(nums[i]+nums[j]))
    //         if(i===val || j===val) continue;
    //         if(val!==undefined){
    //             if(!set.has(returnSortedTriplets(nums[i],nums[j],-(nums[i]+nums[j])))){
    //                 ans.push([nums[i],nums[j],-(nums[i]+nums[j])]);
    //                 set.add(returnSortedTriplets(nums[i],nums[j],-(nums[i]+nums[j])))
    //             }
    //         }
    //     }
    // }
    // console.log(set)
    // return ans

    // Optimal approach: TC: O(n^2), SC: O(n)
    // nums.sort((a,b) => a-b)
    // console.log(nums)
    // const map = new Map(), ans=[]
    // for(let i=0; i<nums.length; i++){ 
    //     map.set(nums[i],i)
    // }
    // console.log("map",map)
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         const val = map.get(-(nums[i]+nums[j]))
    //         if(val===undefined || j>=val) continue;
    //         ans.push([nums[i],nums[j],-(nums[i]+nums[j])]);

    //         while(nums[j+1]===nums[j]) j++
    //     }
    //     while(nums[i+1]===nums[i]) i++
    // }
    // return ans

    // Super optimal: TC: O(n^2), SC: O(1)
    nums.sort((a,b) => a-b)
    console.log(nums)
    const ans=[]
    for(let i=0; i<nums.length; i++){
        let j=i+1,k=nums.length-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]
            if(sum<0)j++
            else if(sum>0) k--
            else{
                ans.push([nums[i],nums[j],nums[k]])
                j++;k--;
                while(j<k && nums[j-1]===nums[j]) j++
                while(j<k && nums[k+1]===nums[k]) k--
            }
        }
        while(nums[i+1]===nums[i]) i++
    }
    return ans
};

// const nums = [-1,0,1,2,-1,-4] // Output: [[-1,-1,2],[-1,0,1]]
// const nums = [-1,0,1,0,-1,1] // Output: [[-1,0,1]]
// const nums = [0,1,1] // Output: []
// const nums = [0,0,0] // Output: [[0,0,0]]
// const nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0] // Output: [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]
const nums = [-100,-70,-60,110,120,130,160] // Output: [[-100,-60,160],[-70,-60,130]]
console.log("\n",threeSum(nums))

// console.log(alreadyExists([[-1,0,1]],[-1,1,-0]))
function alreadyExists(ans,val){
    // console.log("\nans",ans,"val",val)
    for(let i=0; i<ans.length; i++){
        for(let j=0; j<3; j++){
            // console.log(ans[i][j],val.includes(ans[i][j]))
            if(!val.includes(ans[i][j])) break;
            if(j>=2) {
                for(let k=0; k<3; k++){
                    // console.log(ans[i].includes(val[k]))
                    if(!ans[i].includes(val[k])) break;
                    if(k>=2) return true
                }
            }
        }
    }
    return false;
}

function returnSortedTriplets(n1,n2,n3){
    let ans;
    // console.log(n1,n2,n3)
    if(n1>n2 && n1>n3){
        ans=n2>n3 ? `${n1}${n2}${n3}` : `${n1}${n3}${n2}`
    }else if(n2>n3){
        ans=n1>n3 ? `${n2}${n1}${n3}` : `${n2}${n3}${n1}`
    }else{
        ans=n2>n1 ? `${n3}${n2}${n1}` : `${n3}${n1}${n2}`
    }
    // console.log("sorted",ans)
    return ans
}

// function addTripletStringsToSet(set,n1,n2,n3){
//     set.add(`${n1}${n2}${n3}`)
//     set.add(`${n1}${n3}${n2}`)
//     set.add(`${n2}${n1}${n3}`)
//     set.add(`${n2}${n3}${n1}`)
//     set.add(`${n3}${n2}${n1}`)
//     set.add(`${n3}${n1}${n2}`)
// }


// console.time("loopTimer");
// let count=0

// for (let i = 0; i < 3000; i++) {
//     for(let j=0; j<3000; j++)
//     count++
// }
// console.log(count);
// console.timeEnd("loopTimer",count);