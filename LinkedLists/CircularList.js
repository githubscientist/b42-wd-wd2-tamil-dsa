class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        // create a new node
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            // update the newNode.next
            newNode.next = this.head;

            // update the tailnode.next
            // create a dummy node
            let thead = this.head;

            do {
                thead = thead.next;
            } while (thead.next != this.head);

            thead.next = newNode;

            // update the head
            this.head = newNode;
            
        }
    }

    print() {
        let nodes = [];
        let thead = this.head;

        do {
            if (thead) {
                nodes.push(thead.data);
                thead = thead.next;
            }
        } while (thead != this.head);

        console.log(nodes);
    }
}

let clist = new CircularList();

clist.insertHead(3);
clist.insertHead(4);
clist.insertHead(7);
clist.insertHead(10);

clist.print();