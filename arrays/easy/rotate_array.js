// 189. Rotate Array (Medium from Leetcode)
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
var rotate = function(nums, k) {
    // Brute force, time complexity: O(n*k), TLE(Time Limit Exceeded) since n and k both can be 10**5
    // let i=0;
    // while(i<k){
    //     const last = nums.pop()
    //     nums.unshift(last)
    //     i++;
    // } 

    // 1st working case with a time and space complexity of O(n) and O(n+k) respectively.
    // let i=0;
    // const copy = []
    // console.log(nums.length,k,k%nums.length)
    // k=Math.floor(k%nums.length);
    // while(i<k && nums.length>0){
    //     const last = nums.pop()
    //     copy.push(last)
    //     i++;
    // } 
    // console.log(k,copy,nums)
    // // console.log(copy.concat(nums))
    // // nums = copy.concat(nums)
    // // nums = [...copy,...nums]
    // let final = [...copy.reverse(), ...nums]
    // for(let i=0;i<final.length;i++){
    //     nums[i]=final[i]
    // }
    // console.log(nums)

    // Optimal solution: reverse first 0 to k-1, then k to n-1, and then 0 to n-1 elements. 
    let n=nums.length;
    k=k%n;
    reverseArray(nums,n-k,n-1)
    reverseArray(nums,0,n-k-1)
    reverseArray(nums,0,n-1)
};

// let nums = [1,2,3,4,5,6,7], k = 3;
// let nums = [-1,-2,-3,-4], k = 5;
let nums = [1,2], k = 7;
rotate(nums,k)
// addElement(nums)
console.log("rotated",nums)

// function addElement(nums){
//     nums = [...nums, nums.length]
// }

function reverseArray(arr, i, j){
    while(i<j){
        const temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
    console.log("reversed",arr)
}
