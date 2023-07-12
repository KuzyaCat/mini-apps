// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i += 1) {
        let [x, y] = intervals[i];
        let [_, prevY] = intervals[i - 1];
        if (x <= prevY) {
            intervals[i - 1][1] = Math.max(y, prevY);
            intervals.splice(i, 1);
            i -= 1;
        }
    }
    return intervals;
};
