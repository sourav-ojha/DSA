/**Problem Description
Given a linked list(need not be sorted) with duplicates, remove all duplicates, such that only the first occurrence of each element must remain in the LL, and return the head. */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeDuplicates(head) {
  // if head is null or head.next is null, return head
  // create a set to store the values
  // create a prev pointer to store the previous node
  // create a current pointer to store the current node
  // while current is not null
  // if current.val is in the set
  // set prev.next to current.next
  // set current to current.next
  // else
  // add current.val to the set
  // set prev to current
  // set current to current.next
  // return head

  if (!head || !head.next) return head;
  let set = new Set();
  let prev = null;
  let current = head;
  while (current) {
    if (set.has(current.val)) {
      prev.next = current.next;
      current = current.next;
    } else {
      set.add(current.val);
      prev = current;
      current = current.next;
    }
  }

  return head;
}
