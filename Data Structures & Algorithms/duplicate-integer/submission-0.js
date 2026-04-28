class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let status = false;
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++) {
                if(nums[i] === nums[j]){
                    status = true;
                }
            }
        }
        return status;
    }
}
