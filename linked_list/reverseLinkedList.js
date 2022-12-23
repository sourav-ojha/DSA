/**Problem Description
Given the elements of a linked list, reverse it.


You’ll have to implement the given method, which has the original list’s head pointer as an argument, and return the head of the updated list. */

import ListNode from "./lib/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLinkedList(head) {
  // if head is null or head.next is null, return head
  // create a prev pointer to store the previous node
  // create a current pointer to store the current node
  // create a next pointer to store the next node
  // while current is not null
  // set next to current.next
  // set current.next to prev
  // set prev to current
  // set current to next
  // return prev

  if (!head || !head.next) return head;
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
