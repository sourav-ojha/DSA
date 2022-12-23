/**Problem Description
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the one’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. */
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
function sumLists1(head1, head2) {
  // psuedocode
  // create a new linked list
  // create a carry variable
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
  newHead = newHead.next;
  return newHead;
}
