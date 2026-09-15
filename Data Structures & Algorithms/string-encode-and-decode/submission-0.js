class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(let i=0; i<strs.length; i++){
            encoded+= strs[i].length + "#" + strs[i];
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i=0;
        while(i<str.length){
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = Number(str.slice(i,j));
            i = j + 1;
            result.push(str.slice(i, i + length)); 
            i = i+length;  
        }
        return result;
    }
}
