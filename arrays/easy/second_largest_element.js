// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
let count=0;
function secondLargestElement(arr){
    // Brute force. Time complexity(O(N.logN+N))
    // Sort the array, return the largest and second largest.
    // const sorted = arr.sort((a,b)=>a-b)
    // const lastElement = sorted[sorted.length-1]
    // let i=2;
    // console.log("sorted",sorted,lastElement)
    // while(lastElement===sorted[sorted.length-i]){
    //     console.log(i)
    //     i++;
    // }
    // return sorted[sorted.length-i];

    // Better approach. Time complexity(O(N))
    // store largest and second largest in two different variables, keep comparing and keep changing.
    let largest=arr[0], secondLargest;
    for(let i=1;i<arr.length;i++){
        count++;
        if(secondLargest===undefined) secondLargest=arr[i];
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i];
        }else{ 
            count++;
            if(arr[i]>secondLargest){
                secondLargest=arr[i];
            }
        }
    }
    return secondLargest;

    // Optimal approach

    
}
// array = [21, 105, 51, 32, 10]
// array = [-20, -55, -1, -33, 0]
console.log(secondLargestElement(array),"is the second largest element in the array.")
console.log("No. of comparisons: ",count)


// alternate method (tournament method: comparing two adjacents elements)
// reduces no. of comparisons but takes space.
count=0;
function secondLargestTournament(arr){
    if(arr.length<2) return null;

    let players = arr.map(v => ({ value: v, beaten: []}))

    while(players.length>1){
        let nextRound=[]
        for(let i=0; i<players.length; i+=2){
            if(i+1 === players.length){ 
                nextRound.push(players[i])
            }else{
                let a = players[i];
                let b = players[i+1] 
                count++;
                if(a.value > b.value){
                    a.beaten.push(b.value)
                    nextRound.push(a)
                }else{
                    b.beaten.push(a.value)
                    nextRound.push(b)
                }
            }
        }
        players = nextRound;
    }
    // Finding max among beaten elements
    let beaten = players[0].beaten;
    for (let i = 1; i < beaten.length; i++) {
        count++; // ✅ REAL comparison
        if (beaten[i] > beaten[0]) beaten[0] = beaten[i];
    }

    return beaten[0];
}

console.log(secondLargestTournament(array),"is the second largest element(using Tournament method).")
console.log("No. of comparisons: ",count)

// Example 1:
// Input:
//  [1, 2, 4, 7, 7, 5]  
// Output:
  
// Second Smallest : 2  
// Second Largest : 5  
// Explanation:
//   The elements are sorted as 1, 2, 4, 5, 7, 7.  
// Hence, the second smallest element is 2, and the second largest element is 5.