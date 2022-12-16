const DoublyLinkedList = require("./doubly-linked-list");
// const sortSortedLinkedLists = require("./linked-list-extra-practice");
// import {sortSortedLinkedLists} from "./linked-list-extra-practice.js";



describe('sortSortedLinkedLists', function () {

  const smallSortedList = new DoublyLinkedList([1, 5, 12, 30]);
  const smallSortedList2 = new DoublyLinkedList([0, 4, 6, 11]);
  const largeSortedList = new DoublyLinkedList([2, 3, 4, 6, 7, 8, 9, 10, 15, 25, 35, 40, 50]);

  it('handles two empty lists', function () {

    const sortedEmptyList = DoublyLinkedList.sortSortedLinkedLists(new DoublyLinkedList(), new DoublyLinkedList());

    expect(sortedEmptyList.length).toBe(0);
    expect(sortedEmptyList.head).toBe(null);
    expect(sortedEmptyList.tail).toBe(null);

    console.log(sortedEmptyList.nodes);
  });

  it('handles one empty list, one valid list', function () {
    const sortedTestList = DoublyLinkedList.sortSortedLinkedLists(new DoublyLinkedList(), smallSortedList);

    expect(sortedTestList.length).toBe(4);

    console.log(sortedTestList.nodes);
  });

  it('sorts lists of same size', function () {
    const sortedTestList = DoublyLinkedList.sortSortedLinkedLists(smallSortedList, smallSortedList2);

    expect(sortedTestList.length).toBe(8);

    console.log(sortedTestList.nodes);
  });

  it('sorts lists of different sizes', function () {
    const sortedTestList = DoublyLinkedList.sortSortedLinkedLists(smallSortedList, largeSortedList);

    expect(sortedTestList.length).toBe(17);

    console.log(sortedTestList.nodes);
  });

  it('merges two identical lists', function () {
    const sortedTestList = DoublyLinkedList.sortSortedLinkedLists(smallSortedList, smallSortedList);

    expect(sortedTestList.length).toBe(8);

    console.log(sortedTestList.nodes);
  });

});


describe('pivotAround', function () {

  const exampleList = new DoublyLinkedList([7, 6, 2, 3, 9, 1, 1]);

  it('works with example 1', function () {
    console.log(exampleList.nodes);
    exampleList.pivotAround(5);
    console.log(exampleList.nodes);
  });

});
