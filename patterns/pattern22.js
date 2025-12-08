// pattern 22 from striver's a to z dsa course sheet.

const n=4;

for(let i=0; i<2*n-1; i++){
    for(let j=0; j<2*n-1; j++){
        const top = i, left = j;
        const right = 2*n-2-i, bottom = 2*n-2-j;
        const val = n-Math.min(top, left, right, bottom)
        process.stdout.write(`${val}`)
    }
    console.log()
}

//expected output

// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444