/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
           intervals.sort((a, b) => a.start - b.start);
           //console.log("Sorted intervals: ", intervals);

    for (let i = 1; i < intervals.length; i++) {
        // Current meeting starts before previous meeting ends
        if (intervals[i].start < intervals[i - 1].end) {
            return false;
        }
    }

    return true;
    }
}
