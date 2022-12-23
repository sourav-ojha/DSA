/**Problem Description
 Given 2 sorted linked lists, merge them into a new sorted linked list and return head of the merged list. The new list should be made by splicing (adjusting the pointers) together the nodes of the first two lists. */
/*
 class ListNode{
     constructor(val){
         this.val = val;
         this.next = null;
        }   }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  // pseudo code
  // create a new linked list
  // iterate through both linked lists
  // add the smaller value to the new linked list
  // return the head of the new linked list
  let head = new ListNode(null);
  let current = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1 === null) {
    current.next = l2;
  } else {
    current.next = l1;
  }
  return head.next;
}
