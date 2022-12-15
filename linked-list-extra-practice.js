import DoublyLinkedList from "./doubly-linked-list";

/** Accepts two sorted linked lists.
 *
 * Returns a new merged linked list, sorted
 *
 * Original lists remain intact.
 */
function sortSortedLinkedLists(listA, listB) {

  // construct new list
  const newLinkedList = new DoublyLinkedList();

  let pointerA = listA.head;
  let pointerB = listB.head;

  if (!pointerA && !pointerB) return newLinkedList;

  while (pointerA || pointerB) {

    let isANext;
    if (pointerA === null) isANext = false;
    else if (pointerB === null) isANext = true;
    else isANext = pointerA.val <= pointerB.val;

    if (isANext) {
      newLinkedList.push(pointerA.val);
      pointerA = pointerA.next;
    }
    else {
      newLinkedList.push(pointerB.val);
      pointerB = pointerB.next;
    }

  }


  console.log(newLinkedList);

  return newLinkedList;

}


export { sortSortedLinkedLists };