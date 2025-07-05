// Stack:
// A stack is a linear data structure that follows the Last In First Out (LIFO) principle.
// It means that the last element added to the stack is the first one to be removed.
// Stacks are often used for managing function calls, undo operations, and parsing expressions.
// In TypeScript, you can implement a stack using an array or a class.
class Stack<T> {
    private items: T[] = []
    
    // Push an item onto the stack
    push(item: T): void { this.items.push(item) }

    // Check if the stack is empty
    isEmpty(): boolean { return this.items.length === 0 }

    // Pop an item from the stack
    pop(): T | undefined {
        if (this.isEmpty()) return undefined
        return this.items.pop()
    }

    // Peek at the top item of the stack without removing it
    peek(): T | undefined {
        if (this.isEmpty()) return undefined
        return this.items[this.items.length - 1]
    }

    // Get the size of the stack
    size(): number { return this.items.length }

    // Clear the stack
    clear(): void { this.items = [] }

    // Convert the stack to an array
    toArray(): T[] { return [...this.items] }

    // Print the stack
    print(): void {
        console.log('Stack:', this.items.join(' -> '))
    }

    // Convert the stack to a string
    toString(): string {
        return this.items.join(' -> ')
    }

    // Iterate through the stack
    forEach(callback: (item: T, index: number) => void): void {
        this.items.forEach(callback)
    }

    // Find an item in the stack
    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate)
    }
    // Similarly, you can add more methods like an array.
}

// Example usage of the Stack class
const stack = new Stack<number>()
stack.isEmpty() // true
stack.push(1)
stack.push(2)
stack.push(3)
stack.isEmpty() // false

stack.peek() // 3
stack.print() // Stack: 1 -> 2 -> 3
stack.size() // 3

stack.forEach((item, index) => {
    console.log(`Item at index ${index}: ${item}`)
}) // Output: Item at index 0: 1, Item at index 1: 2, Item at index 2: 3

stack.find(item => item === 2) // 2
stack.find(item => item === 4) // undefined

stack.pop() // 3
stack.print() // Stack: 1 -> 2
stack.toArray() // [1, 2]
stack.toString() // "1 -> 2"

stack.clear()
stack.print() // Stack: (empty)

// Queue:
// A queue is a linear data structure that follows the First In First Out (FIFO) principle.
// It means that the first element added to the queue is the first one to be removed.
class Queue<T> {
    private items: T[] = []

    // Enqueue an item to the queue
    enqueue(item: T): void { this.items.push(item) }

    // Check if the queue is empty
    isEmpty(): boolean { return this.items.length === 0 }

    // Dequeue an item from the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined
        return this.items.shift()
    }

    // Peek at the front item of the queue without removing it
    peek(): T | undefined {
        if (this.isEmpty()) return undefined
        return this.items[0]
    }

    // Get the size of the queue
    size(): number { return this.items.length }

    // Clear the queue
    clear(): void { this.items = [] }

    // Convert the queue to an array
    toArray(): T[] { return [...this.items] }

    // Print the queue
    print(): void {
        console.log('Queue:', this.items.join(' <- '))
    }

    // Convert the queue to a string
    toString(): string {
        return this.items.join(' <- ')
    }
}

// Example usage of the Queue class
const queue = new Queue<number>()
queue.isEmpty() // true

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.isEmpty() // false

queue.peek() // 1
queue.print() // Queue: 1 <- 2 <- 3
queue.size() // 3

queue.dequeue() // 1
queue.print() // Queue: 2 <- 3
queue.toArray() // [2, 3]
queue.toString() // "2 <- 3"

queue.clear()
queue.print() // Queue: (empty)

// Note: The Stack and Queue classes can be extended with more methods as needed, similar to arrays.
// You can also implement additional methods like `find`, `forEach`, etc., similar to the Stack class.
// These data structures can be used in various algorithms and applications, such as parsing expressions, managing tasks, and more.
// They are fundamental data structures in computer science and are widely used in programming.

// Circular Queue:
// A circular queue is a linear data structure that follows the FIFO principle but connects the end of the queue back to the front.
// It uses a fixed-size array and two pointers (front and rear) to keep track of the elements.
// It is also called as a ring buffer or circular buffer.
class CircularQueue<T> {
    private items: T[]
    private front: number
    private rear: number
    private capacity: number

    constructor(capacity: number) {
        this.capacity = capacity
        this.items = new Array<T>(capacity)
        this.front = 0
        this.rear = 0
    }

    // Enqueue an item to the circular queue
    enqueue(item: T): void {
        if ((this.rear + 1) % this.capacity === this.front) {
            throw new Error('Queue is full')
        }
        this.items[this.rear] = item
        this.rear = (this.rear + 1) % this.capacity
    }

    // Dequeue an item from the circular queue
    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined
        const item = this.items[this.front]
        this.front = (this.front + 1) % this.capacity
        return item
    }

    // Check if the circular queue is empty
    isEmpty(): boolean {
        return this.front === this.rear
    }

    // Peek at the front item of the circular queue without removing it
    peek(): T | undefined {
        if (this.isEmpty()) return undefined
        return this.items[this.front]
    }

    // Get the size of the circular queue
    size(): number {
        return (this.rear - this.front + this.capacity) % this.capacity
    }

    // Clear the circular queue
    clear(): void {
        this.front = 0
        this.rear = 0
    }

    // Convert the circular queue to an array
    toArray(): T[] {
        const result: T[] = []
        for (let i = 0; i < this.size(); i++) {
            result.push(this.items[(this.front + i) % this.capacity])
        }
        return result
    }

    // Print the circular queue
    print(): void {
        console.log('Circular Queue:', this.toArray().join(' <- '))
    }
}

// Example usage of the CircularQueue class
const circularQueue = new CircularQueue<number>(5)
circularQueue.isEmpty() // true

circularQueue.enqueue(1)
circularQueue.enqueue(2)
circularQueue.enqueue(3)
circularQueue.isEmpty() // false

circularQueue.peek() // 1
circularQueue.print() // Circular Queue: 1 <- 2 <- 3
circularQueue.size() // 3

circularQueue.dequeue() // 1
circularQueue.print() // Circular Queue: 2 <- 3
circularQueue.enqueue(4)
circularQueue.enqueue(5)
circularQueue.enqueue(6) // Throws Error: Queue is full

circularQueue.print() // Circular Queue: 2 <- 3 <- 4 <- 5 <- 6
circularQueue.toArray() // [2, 3, 4, 5, 6]

circularQueue.clear()
circularQueue.print() // Circular Queue: (empty)

// Note: The CircularQueue class can be extended with more methods as needed, similar to the Stack and Queue classes.
// Circular queues are useful in scenarios where you need a fixed-size buffer that can be reused, such as in network packet processing, task scheduling, and more.
// They help in efficiently managing resources and avoiding memory fragmentation.
// They are also widely used in real-time systems and embedded systems where memory is limited.