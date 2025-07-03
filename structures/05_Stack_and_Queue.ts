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