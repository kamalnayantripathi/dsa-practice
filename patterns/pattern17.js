// pattern 17 from striver's a to z dsa course sheet.

const n=5;
let charCode=65; // ASCII char code for "A"

for(let i=1; i<n; i++){
    for(let j=1; j<n; j++){
        if (j>=n-i) {  
            console.log(j, i)
            process.stdout.write(String.fromCharCode(charCode+j-1))
        } else {
            process.stdout.write(` `)
        }
    }
    console.log()
}

// expected output