class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxprofit = 0;
        let l=0; let r =1;
        while(r<prices.length){
            if(prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxprofit = Math.max(maxprofit, profit);
            }
            else {
                l=r
            }
            r++;
        }
       return maxprofit;
    }
}
