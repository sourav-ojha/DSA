/**Problem Description
Given a singly linked list of integers, reverse every contiguous set of nodes that have only even values. */

/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Given a singly linked list of integers, reverse every contiguous set of nodes that have only even values.
function reverseEvenElements(head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  while (curr && curr.next) {
    if (curr.val % 2 === 0 && curr.next.val % 2 === 0) {
      let next = curr.next.next;
      let temp = prev.next;
      prev.next = curr.next;
      curr.next.next = temp;
      curr.next = next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummy.next;
}
