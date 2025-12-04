// pattern 22 from striver's a to z dsa course sheet.

const n=4;

for(let i=0; i<n; i++){
    for(let j=0; j<2*n-1; j++){
        if(i>0 && i<n-1){
            if(j===0 || j===2*n-2){
                process.stdout.write(`${n}`)
            }else{
                process.stdout.write(`${n-i}`)
            }
        }else{
            process.stdout.write(`${n}`)
        }
    }
    console.log()
}

//expected output