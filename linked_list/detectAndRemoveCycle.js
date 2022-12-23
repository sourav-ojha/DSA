/**Problem Description
Given only the head of a linked list, check whether the linked list contains cycle or not. If the linked list does not contain a cycle return false, otherwise remove the cycle and return true.
cycle means that for last node of LL, called last, last->next is not NULL, but instead points to some other node of the LL(not last itself)
*/

/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function detectAndRemoveCycle(head) {
  // psuedocode
  // create a slow and fast pointer
  // while fast.next and fast.next.next exists
  // move slow pointer by 1
  // move fast pointer by 2
  // if slow === fast, break
  // if slow !== fast, return false
  // move slow to head
  // while slow !== fast
  // move slow by 1
  // move fast by 1
  // set fast.next to null
  // return true
  let slow = head;
  let fast = head;
  let prev1 = null;
  if (!head || !head.next) return false;
  while (fast && fast.next) {
    prev1 = slow;
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  if (slow !== fast) return false;
  slow = head;
  let prev = null;
  while (slow !== fast) {
    prev = fast;
    slow = slow.next;
    fast = fast.next;
  }
  if (prev) prev.next = null;
  else prev1.next = null;
  return true;
}
