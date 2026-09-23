class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxwater = 0;
        while(left < right){
            let containerWidth = right -left;
            let containerHeight = Math.min(heights[left], heights[right]);

            let area = containerWidth * containerHeight;
            maxwater = Math.max(area, maxwater);
            if(heights[left] < heights[right]){
                left++;
            }
            else{
                right--;
            }
        } 
        return maxwater;
    }
}
