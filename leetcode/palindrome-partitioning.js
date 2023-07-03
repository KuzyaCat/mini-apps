// Given a string s, partition s such that every substring of the partition is a palindrome.
// Return all possible palindrome partitioning of s.
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const list = [];
    const tempList = [];
    const startIndex = 0;
    backtrack(list, tempList, s, startIndex);
    return list;
};

function backtrack(list, tempList, s, startIndex) {
    if (startIndex === s.length) {
        list.push([...tempList]);
        return;
    }
    for (let i = startIndex; i < s.length; i += 1) {
        if (!isPalindrome(s, startIndex, i)) {
            continue;
        }
        tempList.push(s.substring(startIndex, i + 1));
        backtrack(list, tempList, s, i + 1);
        tempList.pop();
    }
}

function isPalindrome(s, start, end) {
    while (start <= end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;
}
