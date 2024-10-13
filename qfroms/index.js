// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack_one = new Stack();
        this.stack_two = new Stack();
    }

    add(record) {
        this.stack_one.push(record);
    }

    remove() {
        while (this.stack_one.peek()) {
            this.stack_two.push(this.stack_one.pop());
        }

        return this.stack_two.pop();
    }

    peek() {
        while (this.stack_one.peek()) {
            this.stack_two.push(this.stack_one.pop());
        }

        return this.stack_two.peek();
    }
}

module.exports = Queue;
