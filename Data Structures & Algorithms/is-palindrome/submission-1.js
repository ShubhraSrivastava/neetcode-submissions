class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str1 = s.toLocaleLowerCase().split(" ").join("").replace(/[^a-zA-Z0-9]/g, '');
        var str2 ="";
        for(let i=str1.length-1; i>=0; i--){
            str2 = str2 + str1.charAt(i);
        }
        return str2 === str1;
    }
}
