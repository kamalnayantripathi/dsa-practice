// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.


const n = 171;
process.stdout.write(`The divisors of ${n} are: `)
for(let i=2;i<Math.floor(n/2); i++){
    if(n%i===0) process.stdout.write(`${i} `)
}
console.log()