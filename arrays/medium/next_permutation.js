// 31. Next Permutation (Medium)
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

var nextPermutation = function(nums) {  
    // Optimal solution: Time complexity: O(3*n), Space complexity: O(1)
    // The idea is to find the smallest element from the last, when found mark it as breakpoint and swap the element from the last which is "just" greater than the breakpoint element. Once done, reverse the complete array after the breakpoint index.
    // Note: We don't have a brute force approach, as if we were to apply brute force and find all possible permutations/arrangements, then the time complexity O(N!*N) will become very very large.
    let breakpoint=-1;
    for(let i=nums.length-2; i>=0; i--){
        if(nums[i]<nums[i+1]) {
            breakpoint=i; 
            break;
        }
    }
    console.log("breakpoint",breakpoint)
    if(breakpoint===-1) return nums.reverse()

    for(let i=nums.length-1;i>breakpoint; i--){
        if(nums[i]>nums[breakpoint]){
            swap(nums,i,breakpoint); break;
        }
    }
    reverseArray(nums, breakpoint+1, nums.length-1)
    return nums
};
// const nums = [1,2,3] // Output: [1,3,2]
const nums = [1,3,2] // Output: [2,1.3]
// const nums = [2,3,1] // Output: [3,1,2]
// const nums = [3,2,1] // Output: [1,2,3]
// const nums = [1,1,5] // Output: [1,5,1]
console.log(nextPermutation(nums))

// swaps array elements in place.
function swap(nums,i,j){
    const temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}
// Reverses the array element from index i to j; NOTE: i-> starting index and j-> ending index.
function reverseArray(nums, i, j){
    console.log("reverse i,j",i,j,nums)
    while(i<j){
        const temp = nums[i]
        nums[i++]=nums[j]
        nums[j--]=temp;
    }
    console.log(nums)
}