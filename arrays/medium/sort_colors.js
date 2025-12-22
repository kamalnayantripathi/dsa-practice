// 75. Sort Colors (Medium)
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
var sortColors = function(nums) {
    // Easiest solution using in-built javascript sort method. Time complexity: O(n*log n), Space complexity: O(1)
    // nums.sort((a,b) => b-a)

    // Custom sort algorithm, we will write the merge sort here. TC: O(n*log n), SC: O(n)
    // mergeSort(nums,0,nums.length-1)

    // Optimal solution, three pointer approach. Have one pointer at start(i), other at end(k) and another at start(j) as well which will move.
    // If nums[j] = 0, then swap with ith place and increment both.
    // If nums[j] = 2, then swap with kth place and only reduce k by 1 i.e. k--;
    let i=0;k=nums.length-1;
    let j=i;
    while(j<=k){
        if(nums[j]===0) swap(nums, j,i++)
        if(nums[j]===2) swap(nums, j--,k--)
        j++;
    }
};

// const nums = [2,0,2,1,1,0]
const nums = [2,2,2,0,2]
// const nums = [2,0,1]
sortColors(nums)
console.log("result",nums)

function mergeSort(nums){
    if(nums.length<=1) return nums;
    const mid = Math.floor(nums.length/2)
    const low = mergeSort(nums.slice(0,mid))
    const high = mergeSort(nums.slice(mid,nums.length))
    let i=0,j=0;k=0;
    while(j<low.length && k<high.length){
        if(low[j]<high[k]) nums[i++]=low[j++]
        else nums[i++]=high[k++];
    }
    while(j<low.length) nums[i++]=low[j++]
    while(k<high.length) nums[i++]=high[k++]
    return nums;
}

function swap(nums, i,j){
    const temp = nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
    console.log("swapped: ",i,j,nums)
}