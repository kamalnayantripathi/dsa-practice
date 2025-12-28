// 73. Set Matrix Zeroes (Medium)
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

var setZeroes = function(matrix) {
    // Brute force: Time complexity(TC): O(2m*n), Space complexity: ~O(n/5+m/5)
    const rows=[],cols=[],m=matrix.length;n=matrix[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j]===0){
                rows.push(i)
                cols.push(j)
            }
        }
    }
    console.log(rows, cols)
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(rows.includes(i) || cols.includes(j)) matrix[i][j]=0;
        }
    }
    return matrix;
};

// const matrix = [[1,1,1],[1,0,1],[1,1,1]] // Output: [[1,0,1],[0,0,0],[1,0,1]]
// const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
matrix = [[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]

console.log(setZeroes(matrix))