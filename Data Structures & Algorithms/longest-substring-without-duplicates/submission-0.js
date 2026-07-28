class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left =0;
        let maxlen= 0;

        const frequency = new Map();

        for(let right =0; right < s.length; right++) {

            const char = s[right];
            frequency.set(char, (frequency.get(char) || 0) + 1);
            console.log("Frequency at right = " + right + " is: ", frequency )

            while(frequency.get(char) > 1){
                const leftChar = s[left];
                frequency.set(leftChar, frequency.get(leftChar)-1);
                left++;
            }
            maxlen = Math.max(maxlen, right - left + 1);
        }
        return maxlen;
    }
}
