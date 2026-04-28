class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const output = [];
        for(let i=0; i<nums.length; i++) {
            let j = i+1;
            while(j<nums.length) {
                if(nums[i] + nums[j] === target){
                    output.push(i);
                    output.push(j);
                }
                j++;
            }
            
        }
        return output;
    }
}
