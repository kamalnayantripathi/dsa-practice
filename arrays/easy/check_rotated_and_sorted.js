// 1752. Check if Array Is Sorted and Rotated (Easy)
// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

var check = function(nums) {
    // brute force: keep rotating the array and keep checking if for any one rotation it is sorted.
    // Time complexity ~ O(n*n), Space complexity ~ O(1)
    // Note that to rotate we will use the optimal method from rotate_array.js file;
    // const n = nums.length;
    // for(let i=0; i<n; i++){
    //     console.log("for i = ",i)
    //     reverseArray(nums, 0, 0)
    //     reverseArray(nums, 1, n-1)
    //     reverseArray(nums, 0, n-1)
    //     for(let j=0; j<n; j++){
    //         console.log("for j = ",j)
    //         if(nums[j]>nums[j+1]){
    //             break;
    //         }else if(j===n-1){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // Another similar approach like above will be to sort and make the copy of array first, then rotate it and keep matching which will result using the same time complexity. However, it will take some extra space as well.

    // Optimal solution: Check for the points of inversion i.e. in a sorted rotated array, all the elements should be in a non-decreasing cyclic manner except for one point, from where the array was rotated. So, we keep the count of inversions, and if it is more than what we expect, we return false.
    const n = nums.length;
    let inversionCount=0;
    for(let i=0; i<n-1; i++){
        if(nums[i]>nums[i+1]){
            inversionCount++;
            if(inversionCount>1) return false;
        }
    }
    // Check for last and first element
    if(nums[0]<nums[n-1]) inversionCount++;
    return inversionCount<=1;
};
// nums = [3,4,5,1,2]
nums = [2,1,3,4]
// nums = [1,2,3]
console.log(check(nums))

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