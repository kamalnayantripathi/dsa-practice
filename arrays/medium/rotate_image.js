// 48. Rotate Image (Medium)
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
    // Brute force: Time complexity(TC): O(n*n), Space complexity(SC): O(n*n)
    const result=[],rows=[], n=matrix.length;
    for(let j=0; j<n; j++){
        for(let i=n-1; i>=0; i--){
            console.log(i,j)
            rows.push(matrix[i][j])
        }
        result.push([...rows])
        rows.length=0;
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            matrix[i][j]=result[i][j]
        }
    }
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]] // Output: [[7,4,1],[8,5,2],[9,6,3]]
// const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] // Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

console.log(rotate(matrix), matrix)