/**Problem Description
 Given a linked list and an integer X, partition the LL around X, such that all nodes less than X come before all nodes greater than X. If X is contained within the list, then those nodes need
 
 to be after the elements less than X and before the elements greater than X, i.e. they should appear between the left and right partitions. */

/**
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}}
*/
/**
 * @param {ListNode} head
 * @param {number} X
 * @return {ListNode}
 */
function partition(head, x) {
  // pseudo code
  // create a left and right partition
  // iterate through the linked list
  // if the node is less than x, add it to the left partition
  // if the node is greater than x, add it to the right partition
  // join the left and right partitions
  // return the head
  if (head === null) return null;
  if (head.next === null) return head;
  let left = new ListNode(null);
  let right = new ListNode(null);
  let leftHead = left;
  let rightHead = right;
  let countX = 0;
  while (head !== null) {
    if (head.val < x) {
      left.next = head;
      left = left.next;
    } else if (head.val === x) {
      countX++;
    } else {
      right.next = head;
      right = right.next;
    }
    head = head.next;
  }
  right.next = null;

  while (countX > 0) {
    left.next = new ListNode(x);
    left = left.next;
    countX--;
  }

  left.next = rightHead.next;
  return leftHead.next;
}
