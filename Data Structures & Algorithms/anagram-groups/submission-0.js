class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = {};
        
        for(let s of strs) {
            const sorted = s.split('').sort().join('');
            if(!output[sorted]){
                output[sorted] = [];
            }
            output[sorted].push(s);
        }
        return Object.values(output);
    }
}
