// pattern 15 from striver's a to z dsa course sheet.

const n=5;
let charCode=65;

for(let i=0; i<n; i++){
    for(let j=0; j<n-i; j++){
        process.stdout.write(String.fromCharCode(charCode+j))
    }
    console.log()
}

// expected output

// ABCDE
// ABCD
// ABC
// AB
// A