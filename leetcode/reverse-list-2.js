// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let i = 1;
    const temp = new ListNode(0, head);
    let currentNode = temp;
    while (i < left && currentNode) {
        currentNode = currentNode.next;
        i += 1;
    }
    const tail = currentNode.next;
    while (left < right && currentNode) {
        const nextNode = tail.next;
        tail.next = nextNode.next;
        nextNode.next = currentNode.next;
        currentNode.next = nextNode;
        left += 1;
    }
    return temp.next;
};
