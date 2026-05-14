class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res= {};
        const output = [];
        for(let n of nums) {
            if(!res[n]){
                res[n] = 0;
            }
            res[n] = res[n] + 1 
        }
       const sorted = Object.entries(res).sort((a,b) => b[1]-a[1]);
       for(let i=0; i<k; i++){
        output.push(Number(sorted[i][0]));
       }
       return output;
    }
}
