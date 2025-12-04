// pattern 18 from striver's a to z dsa course sheet.

const n=5;
let charCode=65; // ASCII char code for "A"

for(let i=1; i<n+1; i++){
    charCode=65+n-i;
    for(let j=1; j<=i; j++){
        process.stdout.write(String.fromCharCode(charCode++) + " ")
    }
    console.log()
}

// expected output

// E 
// D E 
// C D E 
// B C D E 
// A B C D E 