function quickSortRecursion(arr){
    if(arr.length===1) return arr;
    const piv=arr[0];
    for(let i=1;i<arr.length;i++){ 
        if(piv>arr[i]){
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    quickSortRecursion()
}

const array = [13,46,24,52,20,9];
// const array = [5,4,3,2,1];
console.log(quickSortRecursion(array), "<-- Sorted in Ascending order");