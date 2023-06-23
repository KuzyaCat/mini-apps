// Given the head of a singly linked list,
// reverse the list, and return the reversed list. 
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
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let prevNode = null;
    let currentNode = head;
    while (currentNode) {
        const nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
};
