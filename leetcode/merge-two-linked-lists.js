// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    let head = list1;
    if (list1.val > list2.val) {
        head = list2;
        list2 = list2.next;
    } else {
        head = list1;
        list1 = list1.next;
    }

    let current = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (!list1) {
        current.next = list2;
    } else {
        current.next = list1;
    }

    return head;
};
