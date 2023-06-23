// You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
// There are at least two different characters in letters.
// O(log(n)) - time
// O(1) - memory
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left === letters.length ? letters[0] : letters[left];
};
