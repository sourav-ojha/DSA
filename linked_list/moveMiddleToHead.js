/** Problem Description
 Given a singly linked list, find the middle node of the linked list and move that node to the head of the list. Return the head of the list. In the case of a list with an even number of nodes, use the second middle one.*/

import ListNode from "./lib/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function moveMiddleToHead(head) {
  // if head is null or head.next is null, return head

  // create a prev pointer to store the rev node
  // create a slow pointer to store the slow node
  // create a fast pointer to store the fast node
  // while fast is not null and fast.next is not null
  // set prev to slow
  // set slow to slow.next
  // set fast to fast.next.next
  // set prev.next to slow.next
  // set slow.next to head
  // set head to slow
  // return head

  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  slow.next = head;
  head = slow;
  return head;
}

export default moveMiddleToHead;
