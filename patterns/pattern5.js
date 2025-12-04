// pattern 5 from striver's a to z dsa course sheet.

const n=5;

for(let i=0; i<n; i++){
    for(let j=0; j<n-i; j++){
        process.stdout.write(`*`)
    }
    console.log()
}

// expected output

// *****
// ****
// ***
// **
// *