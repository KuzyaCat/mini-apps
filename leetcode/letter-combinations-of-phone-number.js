// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// O(3ˆn * 4ˆm) - time. n - number of digits with 3 letters, m - number of digits with 4 letters
// O(n) - space
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    const digitsList = digits.split('');
    const list = [];
    const combination = new Array(digits.length).fill('');
    backtrack(list, combination, digitsList);
    return list;
};

const digitToLetterMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

function backtrack(list, combination, digits, startIndex = 0) {
    if (startIndex >= digits.length) {
        list.push(combination.join(''));
        return;
    }
    const letters = digitToLetterMap[digits[startIndex]];
    for (let letter of letters) {
        combination[startIndex] = letter;
        backtrack(list, combination, digits, startIndex + 1);
    }
}
