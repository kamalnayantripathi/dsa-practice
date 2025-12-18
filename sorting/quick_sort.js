
function quickSort(arr,low,high){
    console.log("start",arr,low,high)
    if(low>=high) return arr;
    const piv=arr[low];
    let i=low,j=high;
    while(i<j){
        console.log("while",i,j,arr[i],piv,arr[j])
        while(i<=high-1 && arr[i]<=piv){
            i++;
            console.log("i",i)
        }
        while(j>=low+1 && arr[j]>piv){
            j--;
            console.log("j",j)
        }
        if(i<j) console.log("swapped",swap(arr,i,j))
    }
    swap(arr,j,low) 
    console.log("piv",piv, j, arr)
    quickSort(arr,low,j-1)
    quickSort(arr,j+1,high)
    return arr;
}

// const array = [13,46,24,52,20,9];
const array = [5,4,3,2,1];
console.log(quickSort(array,0,array.length-1), "<-- Sorted in Ascending order");

// Swaps the values in the array
function swap(array,first,second){
    console.log("In",array,"swap",first,second)
    const temp=array[first];
    array[first]=array[second];
    array[second]=temp;
    return array;
}