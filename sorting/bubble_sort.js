// Compare every element to it's next one and swap if needed. Keep repeating for till sorted.
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

function bubbleSortRec(arr,i){
    console.log(i,arr)
    if(i>=arr.length) return arr;
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            const temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    return bubbleSortRec(arr,++i);
}
const array = [13,46,24,52,20,9];
// const array = [5,4,3,2,1];
// console.log(bubbleSortLoop(array), "<-- Sorted in Ascending order(Loop)");
console.log(bubbleSortRec(array,0), "<-- Sorted in Ascending order(Recursion)");