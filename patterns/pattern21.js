// pattern 21 from striver's a to z dsa course sheet.

const n=4;

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(i===0 || i===n-1){
            process.stdout.write("*")
        }else{
            if(j===0 || j===n-1){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
    }
    console.log()
}

//expected output

// ****
// *  *
// *  *
// ****