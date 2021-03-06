// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


// slow and fast nodes - pointing at this.head
// is there 2 nodes in front of node? if yes move 2 ahead and slow 1 ahead 
// now slow is pointing at midpoint cause its traveling half as fast
function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = fast;
        fast = fast.next.next;
    }
    return slow;
}
function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = fast;
        fast = fast.next.next;
    }
    return slow;
}
function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = fast;
        fast = fast.next.next;
    }
    return slow;
}