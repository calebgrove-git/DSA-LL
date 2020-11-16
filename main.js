const LinkedList = require('./linkedList');

function display(list) {
  current = list.head;
  newArr = [];
  while (current !== null) {
    newArr.push(current.value);
    current = current.next;
  }
  return newArr;
}
function size(list) {
  current = list.head;
  newArr = [];
  while (current !== null) {
    newArr.push(current.value);
    current = current.next;
  }
  return newArr.length;
}
function isEmpty(list) {
  current = list.head;
  newArr = [];
  while (current !== null) {
    newArr.push(current.value);
    current = current.next;
  }
  if (newArr.length === 0) {
    return true;
  } else return false;
}
function findPrevious(list, index) {
  current = list.head;
  newArr = [];
  while (current !== null) {
    newArr.push(current.value);
    current = current.next;
  }
  return newArr[index - 1];
}
function findLast(list) {
  current = list.head;
  newArr = [];
  while (current !== null) {
    newArr.push(current.value);
    current = current.next;
  }
  last = newArr.length - 1;
  return newArr[last];
}
var reverseLinkedList = function (linkedlist) {
  var node = linkedlist;
  var previous = null;

  while (node) {
    var save = node.next;
    node.next = previous;
    previous = node;
    node = save;
  }
  return previous;
};

var main = function () {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3, 'Kat');
  return SLL;
};
console.log(reverseLinkedList(main()));
