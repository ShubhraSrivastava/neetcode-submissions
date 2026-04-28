class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str1 = s.toLocaleLowerCase().split(" ").join("").replace(/[^a-zA-Z0-9]/g, '');
        const arrstr = [];
        for(let i=str1.length-1; i>=0; i--){
            arrstr.push(str1.charAt(i));
        }
        return arrstr.join("") === str1;
    }
}
