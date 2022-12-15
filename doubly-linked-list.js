/** Node: node for a doubly linked list. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;


  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** _get(idx) returns a node at the given index */

  _get(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null && count !== idx) {
      count += 1;
      current = current.next;
    }

    return current;
  }

  // __repr__() {

  // }

  get nodes() {

    let nodes = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): remove last item & return its value */

  pop() {
    if (this.head === null) {
      throw new Error("This is an empty doubly linked list");
    }

    const temp = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    return temp.val;
  }

  /** shift(): remove first item & return its value */

  shift() {
    if (this.head === null) {
      throw new Error("This is an empty doubly linked list");
    }

    const temp = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length -= 1;
    return temp.val;
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
    if (idx > this.length - 1 || idx < 0) {
      throw new Error("Out of Bounds");
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1 || idx < 0) {
      throw new Error("Out of Bounds");
    }

    const node = this._get(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Out of Bounds");
    }

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const prev = this._get(idx - 1);
      newNode.next = prev.next;
      prev.next.prev = newNode;
      prev.next = newNode;
      newNode.prev = prev;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1 || idx < 0) {
      throw new Error("Out of Bounds");
    }

    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      const temp = this._get(idx);
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      this.length -= 1;
      return temp.val;
    }
  }

  /** return average (mean) of list values. */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = DoublyLinkedList;
