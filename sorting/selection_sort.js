// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

function selection_sorting_loop(arr){
    // Iterate through every element, bring the smallest to the first place one at a time.
    for(let i=0;i<arr.length;i++){
        console.log(arr, i)
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[i]){ // Change the < to > if you want to sort in descending order.
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const array = [13,46,24,52,20,9];
// const array = [5,4,3,2,1];
console.log(selection_sorting_loop(array), "<-- Sorted in Ascending order");


