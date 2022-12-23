/** Problem Description
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.*/
/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/
/**
 * @param {ListNode} head
 *  @return {ListNode}
 */
function oddEvenLinkedList(head) {
  // psuedocode
  // if head is null or head.next is null, return head
  // set odd to head
  // set even to head.next
  // set evenHead to even
  // while even and even.next exists
  // set odd.next to even.next
  // set odd to odd.next
  // set even.next to odd.next
  // set even to even.next
  // set odd.next to evenHead
  // return head
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
}
