/**Problem Description
Given a linked list, determine if it has a cycle in it.


A linked list cycle means that for last node of LL, called last, last->next is not NULL, but instead points to some other node of the LL(not last itself)


Internally, to represent a cycle in the given linked list, we use an integer pos which represents the zero-indexed position of the node that the last node of the LL is connected to. If pos = -1, it means that there is no cycle in the LL. Note that pos is not passed as a parameter.


For instance, consider an LL 1->2->3->4 and pos = 1. This means that there is a cycle such that 4 is connected to the node at position 1, that is, the node with value 2. */

/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/
/**
 * @param {ListNode} head
 * @return {string}
 */
function linkedListCycle(head) {
  // psuedocode
  // create a slow and fast pointer
  // while fast.next and fast.next.next exists
  // move slow pointer by 1
  // move fast pointer by 2
  // if slow === fast, return true
  // return false
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
