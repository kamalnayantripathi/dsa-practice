// Problem Statement: Given an array, we have to find the largest element in the array.

function largestElement(arr){
    // standard for loop way
    // let largest=arr[0];
    // for(let i=1;i<arr.length;i++){
    //     if(largest<arr[i]) largest=arr[i];
    // }
    // return largest

    //using reduce
    return arr.reduce((max, val) => val > max ? val : max, arr[0])
}
array = [2, 5, 1, 3, 0]
// array = [-20, -55, -1, -33, 0]
console.log(largestElement(array),"is the largest element in the array.")

// Example 1:
// Input:
//  arr[] = {2, 5, 1, 3, 0}  
// Output:
//  5  
// Explanation:
  
// 5 is the largest element in the array.