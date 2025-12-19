// Problem Statement: Given an array, we have to find the largest element in the array.

function largestElement(arr){
    // standard for loop way
    // let largest=arr[0];
    // for(let i=1;i<arr.length;i++){
    //     if(largest<arr[i]) largest=arr[i];
    // }
    // return largest

    // alternate method (tournament method: comparing two adjacents elements) takes extra space.
    console.log(arr)
    if(arr.length===1) return arr[0];
    const nums=[]
    for(let i=0;i<arr.length;i=i+2){
        console.log("for",i,arr[i],arr[i+1])
        if(arr[i+1]===undefined) nums.push(arr[i])
        else arr[i]>arr[i+1] ? nums.push(arr[i]) : nums.push(arr[i+1])
    }
    // if(nums[nums.length-1]===undefined) nums.pop();
    return largestElement(nums)

    // using reduce(javascript specific).
    // return arr.reduce((max, val) => val > max ? val : max, arr[0])
}
// array = [2, 7, 1, 3, 5, 4]
array = [-20, -55, -1, -33, 0]
console.log(largestElement(array),"is the largest element in the array.")

// Example 1:
// Input:
//  arr[] = {2, 5, 1, 3, 0}  
// Output:
//  5  
// Explanation:
  
// 5 is the largest element in the array.