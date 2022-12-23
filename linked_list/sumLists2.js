/**Problem Description
 You’re given two numbers represented by two linked lists, where each node contains a single digit. The digits are stored in forward order i.e the one’s digit is at the tail of the list. Write a function that adds the two numbers and returns the sum as a linked list in the same order. */

/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}}
*/

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
function sumLists2(head1, head2) {
  // pseudo code
  // create a new linked list
  // create a carry variable
  // Reverse both the linked list
  // while both the linked list are not null
  // add the value of both the linked list and carry
  // if the sum is greater than 10
  // set the carry to 1
  // set the sum to sum % 10
  // else
  // set the carry to 0
  // create a new node with the sum
  // set the next of the new node to the head of the new linked list
  // set the head of the new linked list to the new node
  // set the head of both the linked list to the next of the head of both the linked list
  // if the carry is 1
  // create a new node with the carry
  // set the next of the new node to the head of the new linked list
  // set the head of the new linked list to the new node
  // return the new linked list

  let newHead = new ListNode(null);
  let curr = newHead;
  let carry = 0;
  head1 = reverse(head1);
  head2 = reverse(head2);
  while (head1 || head2 || carry) {
    let sum = (head1 ? head1.val : 0) + (head2 ? head2.val : 0) + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    let newNode = new ListNode(sum);
    newNode.next = curr.next;
    curr.next = newNode;
    curr = curr.next;

    head1 = head1 ? head1.next : null;
    head2 = head2 ? head2.next : null;
  }
  newHead = reverse(newHead.next);
  return newHead;
}

const reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
