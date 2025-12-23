// 121. Best Time to Buy and Sell Stock(Easy)
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    // Brute force approach
    // TC: O(n^2) → TLE for n up to 10^5
    // Checks all (buy, sell) pairs
    // let max=0;
    // for(let i=0; i<prices.length; i++){
    //     for(let j=i+1;j<prices.length; j++){
    //         console.log(prices[i],prices[j],max)
    //         max=Math.max(prices[j]-prices[i], max)
    //     }
    // } 
    // return max;
    
    // let buy = prices[0], max=0;
    //     // two pointer approach
    //     for(let i=1;i<prices.length;i++){
    //         if(buy<prices[i]){
    //             if((prices[i]-buy)>max) max = prices[i]-buy;
    //         }else if(buy>prices[i]){
    //             buy=prices[i];
    //         }
    //     }
    // return max;  


    // two pointer approach [7,2,6,1,8,3]
    let max=0;
    let buy=0, sell=prices.length-1, i=1;
    while(i<=prices.length-1){
        if(prices[buy]>prices[i]) buy=i;
        else max=Math.max(prices[i]-prices[buy],max)
        i++;
    }
    return max
    // one liner fun with the while loop, you can replace the whole while loop above with this one line;
    // while(i<=prices.length-1) prices[buy]>prices[i] ? buy=i++ : max=Math.max(prices[i++]-prices[buy],max)
}; 

const prices = [7,1,5,3,6,4]
// const prices = [7,6,4,3,1]

console.log(maxProfit(prices))