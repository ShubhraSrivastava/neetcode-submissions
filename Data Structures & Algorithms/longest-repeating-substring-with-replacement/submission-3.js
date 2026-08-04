class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const frequency = new Map();
        let left=0;
        let maxFreq = 0;
        let maxLength = 0;

        for(let right=0; right<s.length; right++) {
            frequency.set(s[right], (frequency.get(s[right]) || 0) + 1);

            maxFreq = Math.max(frequency.get(s[right]), maxFreq);

            while((right-left +1) - maxFreq > k){
                const leftChar = s[left];
                frequency.set(leftChar, frequency.get(leftChar) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
