// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

const n = 5050;

// converting the number to string and using two pointer

const str = `${n}`
let j = str.length-1, i=0;
let isPalindrome=true;
while(i<j){
    if(str[i]!==str[j]) isPalindrome=false;
    i++,j--;
}
console.log(isPalindrome)







