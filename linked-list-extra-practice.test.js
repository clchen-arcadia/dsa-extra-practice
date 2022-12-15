const DoublyLinkedList = require("./doubly-linked-list");
import { sortSortedLinkedLists } from "./linked-list-extra-practice";



describe('sortSortedLinkedLists', function () {

  const smallSortedList = new DoublyLinkedList([1, 5, 12, 30]);
  const largeSortedList = new DoublyLinkedList([2, 3, 4, 6, 7, 8, 9, 10, 15, 25, 35, 40, 50]);

  it('handles two empty lists', function () {

    const sortedEmptyList = sortSortedLinkedLists(new DoublyLinkedList(), new DoublyLinkedList());

    expect(sortedEmptyList.length).toBe(0);
    expect(sortedEmptyList.head).toBe(null);
    expect(sortedEmptyList.tail).toBe(null);
    console.log(sortedEmptyList.nodes);

  });

  it('handles one empty list, one valid list', function () {


  });

  it('sorts lists of same size', function () {


  });

  it('sorts lists of different sizes', function () {


  });

  it('merges two identical lists', function () {


  });







});