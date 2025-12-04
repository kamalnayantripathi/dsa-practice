// pattern 17 from striver's a to z dsa course sheet.

const n=5;
let charCode=65; // ASCII char code for "A"

for(let i=1; i<n; i++){
    charCode=65;
    for(let j=1; j<n; j++){
        if (j>=n-i) {  
            process.stdout.write(String.fromCharCode(charCode++))
        } else {
            process.stdout.write(` `)
        }
    }
    charCode=65;
    for(let j=1; j<i; j++){
        process.stdout.write(String.fromCharCode(charCode+i-j-1))
    }
    console.log()
}

// expected output

//    A
//   ABA
//  ABCBA
// ABCDCBA