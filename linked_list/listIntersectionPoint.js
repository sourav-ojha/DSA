/**Problem Description
There are 2 LLs, and they intersect at a node N, after which they merge into 1 list.

Write a program to find the node at which the intersection of two singly linked lists begins.

Note :

If the two linked lists have no intersection at all, return null.

The linked lists must retain their original structure after the function returns.

You may assume there are no cycles anywhere in the entire linked structure.

Your code should preferably run in O(M + N) time where M and N are the lengths of given lists and use only O(1) memory. */
/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/
/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
function listIntersectionPoint(head1, head2) {
  // pseudo code
  //  1. find the length of both the lists
  //  2. find the difference between the lengths of both the lists
  //  3. move the pointer of the longer list by the difference
  //  4. now move both the pointers by 1 step until they are equal
  //  5. return the node

  let len1 = 0,
    len2 = 0,
    temp1 = head1,
    temp2 = head2;
  while (temp1 || temp2) {
    if (temp1) {
      len1++;
      temp1 = temp1.next;
    }
    if (temp2) {
      len2++;
      temp2 = temp2.next;
    }
  }
  let diff = Math.abs(len1 - len2);
  if (len1 > len2) {
    while (diff) {
      head1 = head1.next;
      diff--;
    }
  } else {
    while (diff) {
      head2 = head2.next;
      diff--;
    }
  }
  while (head1 && head2) {
    if (head1 === head2) {
      return head1;
    }
    head1 = head1.next;
    head2 = head2.next;
  }
  return null;
}
