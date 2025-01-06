const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  while (l !== null && l.value === k) {
    l = l.next;
  }
  
  if(l === null) return null;

  let current = l;

  while (current.next !== null) {
    if(current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next
    }
  }
  return l;
}

let l = new ListNode(3);
l.next = new ListNode(1);
l.next.next = new ListNode(2);
l.next.next.next = new ListNode(3);
l.next.next.next.next = new ListNode(4);
l.next.next.next.next.next = new ListNode(5);

removeKFromList(l, 3)

module.exports = {
  removeKFromList
};
