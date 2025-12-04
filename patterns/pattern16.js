// pattern 16 from striver's a to z dsa course sheet.

const n=5;
let charCode=65;

for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write(String.fromCharCode(charCode+i))
    }
    console.log()
}

// expected output

// A
// BB
// CCC
// DDDD
// EEEEE