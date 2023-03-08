class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }
    
    // pushes the data to the end of the linked list
    push(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the linked list is empty
        if (this.head == null) {
            this.head = newNode;
        } else {
            // if the list is not empty
            // create a dummy head pointer
            let thead = this.head;

            // traverse to the last node or tail node
            while (thead.next != null) {
                thead = thead.next;
            }

            // thead is in the tail node
            thead.next = newNode;
        }
    }

    // deletes the last or tail node of the linked list
    pop() {
        // check if the list is empty
        if (this.head == null) {
            console.log('pop not possible');
        } else if (this.head.next == null) {
            // list has only one element
            this.head = null;
        } else {
            // list has more than one element
            // create a dummy head
            let thead = this.head;

            // traverse the thead to the previous node of tail node
            while (thead.next.next != null) {
                thead = thead.next;
            }

            // thead is in the previous node of tail node
            thead.next = null;
        }
    }

    // return the number of nodes
    length() {
        let nodes = 0;
        let thead = this.head;

        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        return nodes;
    }

    // pushes the data to the beginning of the linked list
    unshift(data) {
        // create a new node
        let newNode = new Node(data);

        // update the newNode next to the current head
        newNode.next = this.head;

        // change the current head to the newNode
        this.head = newNode;
    }

    // deletes the head node or the first node of the linked list
    shift() {
        
    }

    // print the linked list in reverse
    reversePrint() {
        
    }

    print() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        console.log(nodes);
    }
}

let list = new LinkedList();

// list.head = new Node(3);
// list.head.next = new Node(5);
// list.head.next.next = new Node(7);
// list.head.next.next.next = new Node(9);

list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

list.unshift(2);
list.unshift(1);

// console.log(list.length());

list.print();