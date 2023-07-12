// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const frequencies = {};
    let highestFrequency = 0;
    let longest = 0;
    let left = 0;
    let right = 0;

    while (right < s.length) {
        const rightChar = s.charAt(right);
        frequencies[rightChar] = frequencies[rightChar] + 1 || 1;
        highestFrequency = Math.max(highestFrequency, frequencies[rightChar]);

        while (right - left + 1 - highestFrequency > k) {
            const leftChar = s.charAt(left);
            frequencies[leftChar] -= 1;
            left += 1;
        }

        longest = Math.max(longest, right - left + 1);
        right += 1;
    }

    return longest;
};
