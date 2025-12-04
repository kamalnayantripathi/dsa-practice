// pattern 6 from striver's a to z dsa course sheet.

const n=5;

for(let i=0; i<n; i++){
    for(let j=0; j<n-i; j++){
        process.stdout.write(`${j+1} `)
    }
    console.log()
}

// expected output

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1