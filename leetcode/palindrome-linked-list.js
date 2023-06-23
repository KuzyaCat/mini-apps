// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return false;
    }
    if (!head.next) {
        return true;
    }

    // Reversse
    const copyHead = deepClone(head);
    let prevNode = null;
    let currentNode = copyHead;
    while (currentNode) {
        const nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    const reversedNode = prevNode;

    // Compare
    let node1 = head;
    let node2 = reversedNode;
    while (node1 && node2) {
        if (node1.val !== node2.val) {
            return false;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return true;
};

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  let clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  
  return clone;
}
