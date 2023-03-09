class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        // create a new node
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            // update the newNode next to the current head
            newNode.next = this.head;

            this.head.prev = newNode;

            // change the current head to the newNode
            this.head = newNode;
        }
    }

    deleteHead() {
        if (this.head == null) {
            console.log('deleteHead not possible');
        } else if(this.head.next == null) {
            this.head = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
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

    reversePrint() {
        let nodes = [];
        let thead = this.head;

        while (thead && thead.next != null) {
            thead = thead.next;
        }

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.prev;
        }

        console.log(nodes);
    }
}

let dlist = new DoubleList();

dlist.insertHead(3);
dlist.insertHead(5);
dlist.insertHead(1);
dlist.insertHead(10);
dlist.deleteHead();

dlist.print();
dlist.reversePrint();



