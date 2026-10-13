class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0;
        let rob2 = 0;

        for(let n of nums) {
            let tmp = Math.max(rob1, rob2+n);
            rob2 = rob1;
            rob1 =tmp;
        }
        return rob1;
    }
}
