// pattern 12 from striver's a to z dsa course sheet.

const n=5;

for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1; j++){
        if(j<=i){
            process.stdout.write(`${j+1}`)
        }else{
            process.stdout.write(` `)
        }
    }
    for(let j=0; j<n-1; j++){
        if(j>=n-i-2){
            process.stdout.write(`${n-(j+1)}`)
        }else{
            process.stdout.write(` `)
        }
    }
    console.log()
}

// expected output

// 1      1
// 12    21
// 123  321
// 12344321