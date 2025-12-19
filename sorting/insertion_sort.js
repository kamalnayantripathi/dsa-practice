function insertionSortLoop(arr){
    // take one value and put it in its correct place, then move to next ones till result.
    for(let i=0;i<arr.length;i++){
        let j=i+1;
        console.log(j,i,arr)
        while(j<arr.length){
            if(arr[i]>arr[j]){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr;
}

function insertionSortRec(arr, i){
    if(i>=arr.length) return;
    let j=i+1;
    console.log(j,i,arr)
    while(j<arr.length){
        if(arr[i]>arr[j]){
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        j++;
    }
    return insertionSortRec(arr,++i);
}

// const array = [13,46,24,52,20,9];
const array = [5,4,3,2,1];
// console.log(insertionSortLoop(array), "<-- Sorted in Ascending order(Loop)");
console.log(insertionSortLoop(array, 0), "<-- Sorted in Ascending order(Recursion)");