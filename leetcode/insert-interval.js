// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [newStart, newEnd] = newInterval;
    const left = [];
    const right = [];
    for (const interval of intervals) {
        const [start, end] = interval;
        if (end < newStart) {
            left.push(interval);
        } else if (start > newEnd) {
            right.push(interval);
        } else {
            newStart = Math.min(start, newStart);
            newEnd = Math.max(end, newEnd);
        }
    }

    return [...left, [newStart, newEnd], ...right];
};
