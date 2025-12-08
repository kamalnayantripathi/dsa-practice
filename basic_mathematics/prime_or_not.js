// Check if a number is prime or not

const n = 21;
let isPrime="PRIME";

for(let i=2; i*i<=n; i++){
    console.log(n,i)
    if(n%i===0){
        isPrime = "NOT PRIME";
        break;
    }
}

console.log(isPrime)