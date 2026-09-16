class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    const output = new Array(nums.length).fill(1);
    console.log("Initial output: ", output);
    // 1. Store product of all elements to the LEFT
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }
    console.log("Prefix is: ", prefix);
    console.log("Output is: ", output);

    // 2. Multiply by product of all elements to the RIGHT
    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }

    return output;
}
}
