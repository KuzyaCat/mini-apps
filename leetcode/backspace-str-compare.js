// Given two strings s and t, return true if they are equal when both are typed into empty text editors.
// '#' means a backspace character.
// O(n) - time
// O(1) - space
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let si = s.length - 1;
  let ti = t.length - 1;
  let sRemovals = 0;
  let tRemovals = 0;
  while (si >= 0 || ti >= 0) {
    if (s[si] === '#' || t[ti] === '#') {
      if (s[si] === '#') {
        sRemovals += 1;
        si -= 1;
      }
      if (t[ti] === '#') {
        tRemovals += 1;
        ti -= 1;
      }
      continue;
    }
    if (sRemovals || tRemovals) {
      if (sRemovals) {
        si -= 1;
        sRemovals -= 1;
      }
      if (tRemovals) {
        ti -= 1;
        tRemovals -= 1;
      }
      continue;
    }
    if (s[si] !== t[ti]) {
      return false;
    }
    si -= 1;
    ti -= 1;
  }
  return true;
};
