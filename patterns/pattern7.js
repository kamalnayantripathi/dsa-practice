// pattern 7 from striver's a to z dsa course sheet.

const n=5;

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(j>=n-i-1){
            process.stdout.write(`*`)
        }else{
            process.stdout.write(` `)
        }
    }
    for(let j=0; j<i; j++){
        process.stdout.write(`*`)
    }
    console.log()
}

// expected output

//     *
//    ***
//   *****
//  *******
// *********