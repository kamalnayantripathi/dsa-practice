// Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

// Example:
// Input:N = 153
// Output:True
// Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153

let m = 371;

// Firstly count the number of digits: 
let n = m;
let count = 0;

while(n>0){
    ld = n%10;
    n = Math.floor(n/10);
    count++;
}

console.log("DIGITS COUNT: ",count)

// Then check for armstrong number
let input = m;
let val = 0;
for(let i=0; i<count; i++){
    val = val + (m%10)**count;
    m=Math.floor(m/10);
    console.log(val)
}
console.log(val,input,val===input)
const isArmstrong = val === input ? "ARMSTRONG" : "NOT ARMSTRONG";
console.log(isArmstrong)



