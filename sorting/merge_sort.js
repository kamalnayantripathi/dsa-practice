// NOTE:
// This implementation uses a `for` loop for merging.
// I am aware that using a `while` loop is generally safer, more conventional,
// and easier to reason about in merge sort implementations.
// However, at the time of writing this code, I chose to proceed with a `for` loop
// and completed the implementation using that approach.
//
// For reference and best practice, the traditional and recommended `while` loop
// based merge implementation is also provided below.

function mergeSort(arr){
    // divide and merge strategy, keep dividing till one element and then merge back sorted.
    // console.log(arr, "start")
    const merged=[];
    if(arr.length<=1) return arr;
    else{
        const mid = Math.floor((arr.length)/2);
        const firstHalf = mergeSort(arr.slice(0,mid))
        const secondHalf = mergeSort(arr.slice(mid))
        // console.log("f",firstHalf,"s",secondHalf)
        let j=0,k=0;
        for(let i=0; i<firstHalf.length+secondHalf.length; i++){
            if(k>=secondHalf.length || (j<firstHalf.length && firstHalf[j]<secondHalf[k])){ 
                merged.push(firstHalf[j]);  
                j++;
            }else{//secondHalf[k]!==undefined ... if(k<=secondHalf.length)
                merged.push(secondHalf[k]);
                k++;
            }
            // console.log(j, k, firstHalf[j], secondHalf[k]);
            if (merged.length > 1e6) {
                throw new Error("Something is stuck");
            }
        }
    }
    // console.log("merged",merged)
    return merged;
}
// using while loop
//  function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   let i = 0, j = 0;
//   const merged = [];

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       merged.push(left[i]);
//       i++;
//     } else {
//       merged.push(right[j]);
//       j++;
//     }
//   }

//   // remaining elements
//   while (i < left.length) merged.push(left[i++]);
//   while (j < right.length) merged.push(right[j++]);

//   return merged;
// }

const array = [1,0]
// const array = [13,46,24,52,20,9];
// const array = [-5,-4,-3,-2,-1];
// Tested against large inputs (10^4+ elements) similar to LeetCode edge cases


console.log(mergeSort(array), "<-- Sorted in Ascending order");