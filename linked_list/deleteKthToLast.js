/**Problem Description
 Given a linked list, remove the Kth node from the end of the list and return its head.
 
 Note: the given K will always be a valid node. */

/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
	}
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function deleteKthToLast(head, k) {
  // pseudo code
  // create a fast pointer and a slow pointer
  // move the fast pointer k nodes ahead
  // move both pointers until the fast pointer reaches the end
  // remove the slow pointer
  // return the head
  let fast = head;
  let slow = head;
  let count = 0;
  if (k === 0) return head;
  if (head === null) return null;
  if (k === 1 && head.next === null) return null;
  while (count < k) {
    fast = fast.next;
    count++;
  }
  if (fast === null) return head.next;
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}
