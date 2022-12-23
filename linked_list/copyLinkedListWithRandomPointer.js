/**Problem Description
 A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 
 Return a deep copy of the list i.e. the head of the copied linked list.
 
 The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list. */
//Definition for a Node.
// class Node{
//     constructor(val){
//         this.val = val;
//         this.next= null;
//         this.random = null;
//     }
// }
/**
 * @param {Node} head
 * @return {Node}
 */
function copyLinkedListWithRandomPointer(head) {
  // pseudo code
  // create a new linked list
  // iterate through the original linked list
  // add the value to the new linked list
  // return the head of the new linked list
  let newHead = new Node(null);
  let current = newHead;
  let original = head;
  let map = new Map();
  while (original !== null) {
    current.next = new Node(original.val);
    map.set(original, current.next);
    current = current.next;
    original = original.next;
  }
  original = head;
  current = newHead.next;
  while (original !== null) {
    current.random = map.get(original.random);
    current = current.next;
    original = original.next;
  }
  return newHead.next;
}
