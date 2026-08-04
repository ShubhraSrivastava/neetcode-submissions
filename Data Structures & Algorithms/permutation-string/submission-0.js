class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

       if (s1.length > s2.length) {
            return false;
        }
        
       const l1 = s1.length;
       const window = new Map();
       
       let s1freq = new Map();
       for(let i=0; i<s1.length; i++) {
        s1freq.set(s1.charAt(i), (s1freq.get(s1.charAt(i)) || 0) + 1)  
       }

       let left = 0;
       for (let right = 0; right < s2.length; right++) {
        window.set(s2.charAt(right), (window.get(s2.charAt(right))|| 0) + 1);
        if(right-left+1 > l1) {
            const leftChar = s2[left];
            window.set(leftChar, window.get(leftChar) - 1);

            // Remove key if frequency becomes 0
                if (window.get(leftChar) === 0) {
                    window.delete(leftChar);
                }
            
            left++;
        }

         if (right - left + 1 === s1.length &&
                isEqual(s1freq, window)) {
                return true;
            }
        
       }
        return false;

    }
}

function isEqual(map1, map2) {

    if (map1.size !== map2.size) {
        return false;
    }

    for (const [key, value] of map1) {

        if (map2.get(key) !== value) {
            return false;
        }

    }

    return true;
}
