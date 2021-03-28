//单项链表1

class ListNode {
  constructor(key) {
    this.next = null;
    this.prev = null;
    this.key = key;
  }
}

class List {
  constructor() {
    this.header = null;
    this.length = 0;
  }

  static createNode(key) {
    return new ListNode(key);
  }

  //往前插
  // insert(node){
  //   node.prev = null;
  //   node.next = this.header;
  //   if(this.header){
  //     this.header.prev = node;
  //   }
  //   this.header = node;
  //   this.length++;
  // }

  //往后插
  insert(node) {
    if (this.header) {
      let prevNode = this.header;
      while (prevNode.next !== null) {
        prevNode = prevNode.next;
      }
      prevNode.next = node;
      node.prev = prevNode;
    } else {
      this.header = node;
    }
    this.length++;
  }

  find(key) {
    let node = this.header;
    while (node !== null && node.key !== key) {
      node = node.next;
    }
    return node;
  }

  delete(node) {
    const { prev, next } = node;
    delete node.prev;
    delete node.next;
    if (node === this.header) {
      this.header = next;
    }
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
  }
}

const node1 = List.createNode('a');
const node2 = List.createNode('b');
const node3 = List.createNode('c');
const node4 = List.createNode('d');

const list = new List();
list.insert(node1);
list.insert(node2);
list.insert(node3);
list.insert(node4);
console.log(list.header);
console.log(list.find('c').key);
list.delete(node2);
console.log(list.find('b'));
console.log(list.find('d'));
