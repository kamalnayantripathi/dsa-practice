// Problem Statement: Given an integer N return the reverse of the given number.

// Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.

let n = 10400;
let reverse=0;

while(n>0){
    reverse = (reverse*10) + n%10;
    n = Math.floor(n/10);
}

console.log("Reversed no. : ", reverse)
