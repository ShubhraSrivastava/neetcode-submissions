class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const brackets = {
            '(': ')',
            '{': '}',
            '[': ']'
        };
        for(const char of s) {
            if(brackets[char]){
                stack.push(brackets[char])
            }
            else{
                if(stack.length ===0 || stack.pop() !== char){
                    return false;
                }
            }
        }
        return stack.length === 0
    }
}
