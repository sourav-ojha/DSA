/** Problem Description
Given a pointer to a node in a sorted circular singly linked list( sorted in ascending order), write a function to insert a value K into the list such that the linked list still remains a sorted circular list.


Note1: If the given pointer is null i.e. empty list, create a circular list with a new node and return the reference to the new node. Otherwise,return the initial input pointer given.


Note2: The list could have duplicate values. You can insert the new value in any place which will keep the list sorted. */

import ListNode from "./lib/ListNode";

/**
 * @param {ListNode} head
 * @param {number} insertVal
 * @return {ListNode}
 */
function insertIntoSortedCircularList(head, insertVal) {
  // if head is null, create a new node with insertVal and set its next to itself
  // create a prev pointer to store the previous node
  // create a current pointer to store the current node
  // while current is not null
  // if current.val is greater than insertVal and prev.val is less than insertVal
  // set prev.next to a new node with insertVal
  // set prev.next.next to current
  // return head
  // if current.val is less than prev.val and insertVal is greater than current.val
  // set prev.next to a new node with insertVal
  // set prev.next.next to current
  // return head
  // if current.val is less than prev.val and insertVal is less than prev.val
  // set prev.next to a new node with insertVal
  // set prev.next.next to current
  // return head
  // set prev to current
  // set current to current.next
  // if current is equal to head
  // set prev.next to a new node with insertVal
  // set prev.next.next to current
  // return head
  // return head

  if (!head) {
    head = new ListNode(insertVal);
    head.next = head;
    return head;
  }
  let prev = null;
  let current = head;
  while (current) {
    if (current.val > insertVal && prev.val < insertVal) {
      prev.next = new ListNode(insertVal);
      prev.next.next = current;
      return head;
    }
    if (current.val < prev.val && insertVal > current.val) {
      prev.next = new ListNode(insertVal);
      prev.next.next = current;
      return head;
    }
    if (current.val < prev.val && insertVal < prev.val) {
      prev.next = new ListNode(insertVal);
      prev.next.next = current;
      return head;
    }
    prev = current;
    current = current.next;
    if (current === head) {
      prev.next = new ListNode(insertVal);
      prev.next.next = current;
      return head;
    }
  }
  return head;
}
