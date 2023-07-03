// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const list = [];
    const tempStr = '';
    backtrack(list, 0, 0, n, tempStr);
    return list;
};

function backtrack(list, left, right, n, tempStr) {
    if (tempStr.length === n * 2) {
        list.push(tempStr);
    }
    if (left < n) {
        backtrack(list, left + 1, right, n, tempStr + '(');
    }
    if (right < left) {
        backtrack(list, left, right + 1, n, tempStr + ')');
    }
}
