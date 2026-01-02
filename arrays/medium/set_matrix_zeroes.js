// 73. Set Matrix Zeroes (Medium)
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

var setZeroes = function(matrix) {
    // Brute force: Time complexity(TC): O(2m*n) assuming hashing takes O(1), Space complexity: ~O(m+n)
    // const rows=new Set(),cols=new Set(), m=matrix.length;n=matrix[0].length;
    // for(let i=0; i<m; i++){
    //     for(let j=0; j<n; j++){
    //         if(matrix[i][j]===0){
    //             rows.add(i)
    //             cols.add(j)
    //         }
    //     }
    // }
    // console.log(rows, cols)
    // for(let i=0; i<m; i++){
    //     for(let j=0; j<n; j++){
    //         if(rows.has(i) || cols.has(j)) matrix[i][j]=0;
    //     }
    // }

    // Alternate solution: Time complexity(TC): O((m*n)*(m+n)+(m*n)), Space complexity: ~O(1)
    // const m=matrix.length;n=matrix[0].length;
    // for(let i=0; i<m; i++){
    //     for(let j=0; j<n; j++){
    //         if(matrix[i][j]===0){
    //             for(let k=0; k<m; k++){ 
    //                 console.log(k,j,matrix[k][j])
    //                 matrix[k][j]=matrix[k][j]!==0 ? null : 0;
    //             }
    //             for(let k=0; k<n; k++){ 
    //                 matrix[i][k]=matrix[i][k]!==0 ? null : 0;
    //             }
    //         }
    //     }
    // }
    // console.log(matrix)
    // for(let i=0; i<m; i++){
    //     for(let j=0; j<n; j++){
    //         if(!matrix[i][j]) matrix[i][j]=0;
    //     }
    // }

    // Optimal solution
    // Note we can also use arrays instead of sets in the first approach.
    // The idea is to assume the first row and first col from the matrix itself as the representatives of entire matrix. If any value inside the matrix is 0, we mark the first element from its row and columns as 0.
    // But matrix[0][0] is same column and same row, so we will have to mark anyone either row or col with one extra variable
    let col0,m=matrix.length;n=matrix[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j]===0){
                matrix[i][0]=0;
                j>0 ? matrix[0][j]=0 : col0=0;
            }
        }
    }
    console.log(matrix)
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            if(matrix[i][0]===0 || matrix[0][j]===0) matrix[i][j]=0;
        }
    }
    console.log(matrix)
    if(matrix[0][0]===0){ 
        for(let j=1; j<n; j++) matrix[0][j]=0;
    }
    if(col0===0){
        for(let i=0; i<m; i++) matrix[i][0]=0;
    }

};

// const matrix = [[1,1,1],[1,0,1],[1,1,1]] // Output: [[1,0,1],[0,0,0],[1,0,1]]
// const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// const matrix = [[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]] // Output: [[0,0,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
const matrix = [[1,0],[0,1]] // Output: [[0,0],[0,0]]

console.log(setZeroes(matrix), matrix)