// Problem Statement: Given two integers m and n, find their greatest common divisor.

const m=36,n=54;
const biggest = m>n ? m : n;
let hcf;

for(let i=2; i<Math.floor(biggest/2); i++){
    if(m%i===0 && n%i===0){
        hcf=i;
    }
}

console.log(hcf)