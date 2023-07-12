// Given the head of a linked list, return the list after sorting it in ascending order.
// O(nlogn) - time, O(logn)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next)
        return head;

    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null;

    const first = sortList(head);
    const second = sortList(mid);

    return merge(first, second);
};

function merge(first, second) {
    const temp = new ListNode(0);
    let tail = temp;

    while (first && second) {
        if (first.val <= second.val) {
            tail.next = first;
            first = first.next;
        } else {
            tail.next = second;
            second = second.next;
        }
        tail = tail.next;
    }

    if (first)
        tail.next = first;
    else if (second)
        tail.next = second;

    return temp.next;
}
