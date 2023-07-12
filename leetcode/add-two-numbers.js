// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const list = new ListNode(0);
  let head = list;
  let sum = 0;
  let leadingDigit = 0;

  while (l1 || l2 || leadingDigit > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      leadingDigit = 1;
      sum += 10;
    }

    head.val = sum;

    if (l1 || l2 || leadingDigit > 0) {
      head.next = new ListNode(leadingDigit);
      head = head.next;
    }

    sum = leadingDigit;
    leadingDigit = 0;
  }

  return list;
};

