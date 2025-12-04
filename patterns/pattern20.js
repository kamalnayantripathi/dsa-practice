// pattern 20 from striver's a to z dsa course sheet.

const n=5;

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(j<=i){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    for(let j=0; j<n; j++){
        if(j>=n-i-1){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    console.log()
}
for(let i=1; i<n; i++){
    for(let j=0; j<n; j++){
        if(j<=n-i-1){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    for(let j=0; j<n; j++){
        if(j>=i){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    console.log()
}

// expected output

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *