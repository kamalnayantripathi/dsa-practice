function mergeSortRecursion(arr){
    // divide and merge strategy, keep dividing till one element and then merge back sorted.
    console.log(arr, "start")
    if(arr.length===1) return arr;
    else{
        const firstHalf = mergeSortRecursion(arr.slice(0,Math.floor(arr.length/2)))
        const secondHalf = mergeSortRecursion(arr.slice(Math.floor(arr.length/2),arr.length))
        console.log("f",firstHalf,"s",secondHalf)
        let j=0,k=0;console.log("j,k",j,k)
        for(let i=0; i<firstHalf.length+secondHalf.length; i++){
            if(firstHalf[j]<secondHalf[k] || !secondHalf[k]){ 
                arr[i]=firstHalf[j]
                j++;
            }else{
                arr[i]=secondHalf[k]
                k++;
            }
            console.log(i,arr)
        }
    }
    return arr;
}
const array = [13,46,24,52,20,9];
// const array = [5,4,3,2,1];
console.log(mergeSortRecursion(array), "<-- Sorted in Ascending order");