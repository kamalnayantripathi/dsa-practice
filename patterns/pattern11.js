// pattern 11 from striver's a to z dsa course sheet.

const n=5;
let start=1;

for(let i=0; i<n; i++){
    i%2 ? start = 0 : start = 1;
    for(let j=0; j<=i; j++){
        process.stdout.write(`${start} `)
        start=Number(!start);
    }
    console.log()
}

// expected output

// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1