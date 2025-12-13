function bubbleSortLoop(arr){
    for(let i=0;i<arr.length;i++){ 
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// const array = [13,46,24,52,20,9];
const array = [5,4,3,2,1];
console.log(bubbleSortLoop(array), "<-- Sorted in Ascending order");