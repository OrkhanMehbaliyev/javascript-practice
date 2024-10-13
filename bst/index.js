// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;  
        this.left = null;     
        this.right = null;    
    }

    insert(data) {
        // If the data to insert is less than the current node's data
        if (data < this.data) {
            // If there's no left child, insert here
            if (!this.left) {
                this.left = new Node(data);
            } else {
                // Recur on the left child
                this.left.insert(data);
            }
        } else { // If the data to insert is greater than or equal to the current node's data
            // If there's no right child, insert here
            if (!this.right) {
                this.right = new Node(data);
            } else {
                // Recur on the right child
                this.right.insert(data);
            }
        }
    }

    contains(data) {
        // If the current node's data matches the search value
        if (data === this.data) {
            return this; // Return the current node
        }

        // If the data to search for is less than the current node's data
        if (data < this.data) {
            // If there's a left child, search there
            if (this.left) {
                return this.left.contains(data);
            } else {
                return null; // Not found
            }
        } else { // If the data to search for is greater than the current node's data
            // If there's a right child, search there
            if (this.right) {
                return this.right.contains(data);
            } else {
                return null; // Not found
            }
        }
    }
}

module.exports = Node;
