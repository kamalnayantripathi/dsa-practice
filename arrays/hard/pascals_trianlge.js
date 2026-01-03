// 118. Pascal's Triangle (Easy)
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function(numRows) {
    // Brute force: Time complexity(TC): O(n*n), Space complexity(SC): O(n)(not considering ans array)
    const n=numRows,ans=[];
    for(let i=0; i<n; i++){
        let temp=[];    
        for(let j=0; j<=i; j++){
            if(j===0 || j===i) temp.push(1)
            else temp.push(ans[ans.length-1][j-1]+ans[ans.length-1][j])
        }
        ans.push(temp)
    }    
    return ans
};

const numRows = 5 // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// const numRows = 1 // Output: [[1]]
console.log(generate(numRows))