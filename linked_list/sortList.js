/**Problem Description
Given a singly linked list containing N integers, sort it in O(NlogN) time. */
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
function sortList(head) {
  // psuedocode
  // if head is null or head.next is null, return head
  // create a slow and fast pointer
  // while fast.next and fast.next.next exists
  // move slow pointer by 1
  // move fast pointer by 2
  // set slow.next to null
  // set left to sortList(head)
  // set right to sortList(slow.next)
  // return merge(left, right)
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let left = head;
  let right = slow.next;
  slow.next = null;
  left = sortList(left);
  right = sortList(right);
  return merge(left, right);
}

function merge(left, right) {
  // psuedocode
  // create a dummy node and set it to a new ListNode
  // set curr to dummy
  // while left and right exists
  // if left.val < right.val
  // set curr.next to left
  // set left to left.next
  // else
  // set curr.next to right
  // set right to right.next
  // set curr to curr.next
  // set curr.next to left or right
  // return dummy.next
  let dummy = new ListNode();
  let curr = dummy;
  while (left && right) {
    if (left.val < right.val) {
      curr.next = left;
      left = left.next;
    } else {
      curr.next = right;
      right = right.next;
    }
    curr = curr.next;
  }
  curr.next = left || right;
  return dummy.next;
}
