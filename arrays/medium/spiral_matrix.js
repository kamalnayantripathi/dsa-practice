// 54. Spiral Matrix (Medium)
// Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function(matrix) {
    // Brute force: Space complexity(SC): O(m*n), Time complexity(TC): O(m*n)
    const m = matrix.length, n = matrix[0].length, ans=[];
    let lr=true,tb=false,rl=false,bt=false;
    let lre=n,tbe=m,rle=-1, bte=0;
    let k=0,i=0,j=0;
    while(k++<m*n){
        if(lr){ 
            console.log("lr",matrix[i][j])
            ans.push(matrix[i][j++])
            if(j===lre){ 
                console.log("lre")
                j--,i++,lre--;
                tb=true; 
                lr=false
            }
        }else if(tb){
            console.log("tb",matrix[i][j])
            ans.push(matrix[i++][j])
            if(i===tbe){ 
                console.log("tbe")
                rl=true
                tb=false; 
                i--,j--,tbe--;
            }
        }
        else if(rl){
            console.log("rl",matrix[i][j])
            ans.push(matrix[i][j--])
            if(j===rle){ 
                console.log("rle")
                j++,i--,rle++;
                bt=true
                rl=false; 
            }
        }
        else if(bt){
            console.log("bt",matrix[i][j])
            ans.push(matrix[i--][j])
            if(i===bte){ 
                console.log("bte")
                i++,j++,bte++;
                lr=true
                bt=false; 
            }
        }
    }
    return ans;
};

// const matrix = [[1,2,3],[4,5,6],[7,8,9]] // Output: [1,2,3,6,9,8,7,4,5]
// const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
// const matrix = [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
// const matrix = [[5]] // Output: [5]
// const matrix = [[1, 2, 3, 4, 5]] // Output: [1, 2, 3, 4, 5]
// const matrix = [[1],[2],[3],[4]] // Output: [1, 2, 3, 4]
// const matrix = [[1,2,3],[4,5,6]] // Output: [1,2,3,6,5,4]
// const matrix = [[1,2],[3,4],[5,6]] // Output: [1,2,4,6,5,3]
// const matrix = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]] 
// Output: [1,2,3,6,9,12,11,10,7,4,5,8]
// const matrix = [[1,2,3,4,5,6],[7,8,9,10,11,12]] 
// Output: [1,2,3,4,5,6,12,11,10,9,8,7]
// const matrix = [[1,2,3],[8,9,4],[7,6,5]] 
// Output: [1,2,3,4,5,6,7,8,9]
// const matrix = [[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]] 
// Output: [-1,-2,-3,-6,-9,-8,-7,-4,-5]
// const matrix = [[0,1,2],[3,4,5],[6,7,-8]] 
// Output: [0,1,2,5,-8,7,6,3,4]
// const matrix = [[100,99],[ -100, -99]] 
// Output: [100,99,-99,-100]
const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
// Output: [1,2,3,4,8,12,16,20,19,18,17,13,9,5,6,7,11,15,14,10]

console.log(spiralOrder(matrix))