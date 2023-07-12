// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }

    const freqS1 = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);
    for (let char of s1) {
        freqS1[char.charCodeAt(0) - a] += 1;
    }
    const freqS2 = new Array(26).fill(0);

    let i = 0;
    let j = 0;
    while (j < s2.length) {
        freqS2[s2[j].charCodeAt(0) - a] += 1;

        if (j - i + 1 === s1.length && areArraysEqual(freqS1, freqS2)) {
            return true;
        }

        if (j - i + 1 < s1.length) {
            j += 1;
        } else {
            freqS2[s2[i].charCodeAt(0) - a] -= 1;
            i += 1;
            j += 1;
        }
    }
    return false;
};

function areArraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
