// Problem Statement: Given an integer N, return the number of digits in N.

let n = 706005;
let count = 0;

while(n>0){
    ld = n%10;
    console.log(ld)
    n = Math.floor(n/10);
    count++;
}

console.log("DIGITS COUNT: ",count)