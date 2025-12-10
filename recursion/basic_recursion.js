// Problem Description: Given an integer N, write a program to print your name N times using recursion.

let n = 5;
function printName(n){
    if(n===0) return;
    process.stdout.write("Kamal "+n)
    console.log()
    printName(n-1);
}
// printName(n)

// Problem Description: Given an integer N, write a program to print numbers from 1 to N using recursion.

let val = 1;
function print1toN(n){
    if(n===0) return;
    process.stdout.write(`${val++}`)
    console.log()
    print1toN(n-1)
}
// print1toN(n)

// Problem Description: Given an integer N, write a program to print numbers from N to 1 using recursion.

function print1toN(n){
    if(n===0) return;
    process.stdout.write(`${n}`)
    console.log()
    print1toN(n-1)
}
// print1toN(n)

// Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers using recursion.

function SumOfFirstN(n){
    if(n===0) return 0;
    return SumOfFirstN(n-1)+n;
}
// console.log(SumOfFirstN(n))

// Problem Statement: Given a number X,  print its factorial.

// To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.

// Note: X  is always a positive number. 

function factorial(n){
    if(n<3) return n;
    return factorial(n-1) * n;
}
// console.log(factorial(n))

// Problem Statement: You are given an array. The task is to reverse the array and print it.
const arr = [5,4,3,2,1]
function ReverseArray(arr,m,n){
    // using loops
    // for(let i=0;i<Math.floor(arr.length/2); i++){
    //     const temp = arr[i];
    //     arr[i] = arr[arr.length-i-1]
    //     arr[arr.length-i-1] = temp;
    // }
    // return arr;

    // using recursion
    console.log(m, arr)
    if(m===Math.floor(arr.length/2)) return arr;
    const temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
    m++; n--;
    ReverseArray(arr,m,n)
}
// console.log(ReverseArray(arr, 0, arr.length-1))

// Problem Statement: Given a string, check if the string is palindrome or not. A string is said to be palindrome if the reverse of the string is the same as the string.
const str="ABCDCBA"
function checkStringPalindrome(str, m, n){
    if(m===Math.floor(str.length/2)) return true;
    console.log(str[m], str[n])
    if(str[m]!==str[n]) return false;
    m++; n--;
    return checkStringPalindrome(str, m, n)
}
console.log(checkStringPalindrome(str, 0, str.length-1))

// Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term using recursion.

function Fibonacci(n){
    // console.log("Call for n = ",n)
    if(n===0) return 0;
    else if(n===1) return 1;
    const fib = Fibonacci(n-1)+Fibonacci(n-2)
    // console.log(`Fibonacci for n = ${n} is: ${fib}`)
    process.stdout.write(`${fib} `)
    return fib;
}

// console.log("\nFibonacci for n =",n,"is",Fibonacci(n=6))

