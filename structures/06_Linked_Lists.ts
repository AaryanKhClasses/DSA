// Linked Lists
// A linked list is a linear data structure where elements are stored in nodes.
// Each node contains a value and a reference (or pointer) to the next node in the sequence.
// Linked lists can be singly linked (one direction) or doubly linked (two directions).
// Linked lists are dynamic in size, allowing for efficient insertions and deletions.

// A list node represents an element in the linked list.
// It contains a value and a reference to the next node in the list.
class ListNode<T> {
    value: T
    next: ListNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

// The LinkedList class represents a singly linked list.
// It maintains a reference to the head node and tracks the size of the list.
class LinkedList<T> {
    head: ListNode<T> | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    // The `isEmpty` method checks if the linked list is empty.
    // It returns true if the size is 0, indicating that there are no elements in the list.
    isEmpty(): boolean {
        return this.size === 0
    }

    // The `getSize` method returns the current size of the linked list.
    // It provides the number of elements present in the list.
    getSize(): number {
        return this.size
    }

    // The `prepend` method adds a new node with the specified value to the beginning of the linked list.
    // It creates a new ListNode, sets its next reference to the current head, and updates the head to the new node.
    prepend(value: T): void {
        const node = new ListNode(value)
        if(!this.isEmpty()) node.next = this.head
        this.head = node
        this.size++
    }
    // Time Complexity: O(1) for prepend operation

    // The `append` method adds a new node with the specified value to the end of the linked list.
    // It creates a new ListNode and traverses the list to find the last node, then sets its next reference to the new node.
    append(value: T): void {
        const node = new ListNode(value)
        if(this.isEmpty()) this.head = node
        else {
            let previous = this.head
            while(previous!.next) previous = previous!.next
            previous!.next = node
        }
        this.size++
    }
    // Time Complexity: O(n) for append operation, where n is the number of elements in the list

    // The `insert` method adds a new node with the specified value at a given index in the linked list.
    // It creates a new ListNode and traverses the list to find the correct position, then updates the pointers accordingly.
    insert(value: T, index: number): void {
        if(index < 0 || index > this.size) return console.error('Index out of bounds')
        if(index === 0) this.prepend(value)
        else {
            const node = new ListNode(value)
            let previous = this.head
            for(let i = 0; i < index - 1; i++) previous = previous!.next
            node.next = previous!.next
            previous!.next = node
            this.size++
        }
    }
    // Time Complexity: O(n) for insert operation, where n is the number of elements upto the index

    // The `removeFrom` method removes the node at the specified index from the linked list.
    // It checks if the index is valid, then traverses the list to find the node, updates the pointers to skip it, and decreases the size.

    removeFrom(index: number): T | void {
        if(index < 0 || index >= this.size) return console.error('Index out of bounds')
        let removedNode: ListNode<T> | null = null
        if(index === 0) {
            removedNode = this.head
            this.head = this.head!.next
        } else {
            let previous = this.head
            for(let i = 0; i < index - 1; i++) previous = previous!.next
            removedNode = previous!.next
            previous!.next = removedNode!.next
        }

        this.size--
        return removedNode!.value
    }
    // Time Complexity: O(n) for removeFrom operation, where n is the number of elements upto the index

    // The `removeValue` method removes the first occurrence of a node with the specified value from the linked list.
    // It traverses the list to find the node, updates the pointers to skip it, and decreases the size.
    // If the list is empty, it logs a message indicating that the list is empty.
    removeValue(value: number): number | void {
        if(this.isEmpty()) return console.log('List is Empty.')
        if(this.head!.value === value) this.head = this.head!.next
        else {
            let previous = this.head
            while(previous!.next && previous!.next.value !== value) previous = previous!.next
            if(!previous!.next) return console.error('Value not found in the list')
            const removedNode = previous!.next
            previous!.next = removedNode.next
        }
        this.size--
        return value
    }
    // Time Complexity: O(n) for removeValue operation, where n is the number of elements in the list

    // The `search` method checks if a node with the specified value exists in the linked list and returns its index.
    // It traverses the list, comparing each node's value with the specified value.
    search(value: T): number | void {
        if(this.isEmpty()) return console.log('List is Empty.')
        let current = this.head, index = 0
        while(current) {
            if(current.value === value) return index
            current = current.next
            index++
        }
        return console.error('Value not found in the list')
    }
    // Time Complexity: O(n) for search operation, where n is the number of elements in the list

    // The `reverse` method reverses the linked list in place.
    // It iterates through the list, reversing the direction of the next pointers.
    reverse(): void {
        if(this.isEmpty()) return console.log('List is Empty.')
        let previous: ListNode<T> | null = null
        let current = this.head
        while(current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        this.head = previous
    }
    // Time Complexity: O(n) for reverse operation, where n is the number of elements in the list

    // The `print` method prints the elements of the linked list in a readable format.
    // It traverses the list starting from the head and collects the values of each node.
    print(): void {
        if(this.isEmpty()) return console.log('Linked List is empty')
        let current = this.head
        let output = ''
        while(current) {
            output += `${current.value} -> `
            current = current.next
        }
        console.log(output + 'null')
    }
}

// Example usage of the LinkedList class
const linkedList = new LinkedList<number>()
console.log(linkedList.isEmpty()) // Output: true
console.log(linkedList.getSize()) // Output: 0
linkedList.print() // Output: Linked List is empty

linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)
console.log(linkedList.isEmpty()) // Output: false
console.log(linkedList.getSize()) // Output: 3
linkedList.print() // Output: 30 -> 20 -> 10 -> null

linkedList.append(0)
linkedList.print() // Output: 30 -> 20 -> 10 -> 0 -> null

linkedList.insert(25, 2)
linkedList.print() // Output: 30 -> 20 -> 25 -> 10 -> 0 -> null

linkedList.removeFrom(2)
linkedList.print() // Output: 30 -> 20 -> 10 -> 0 -> null

linkedList.removeValue(0)
linkedList.removeValue(5) // Output: Value not found in the list
linkedList.print() // Output: 30 -> 20 -> 10 -> null

linkedList.search(10) // Output: 2
linkedList.search(100) // Output: Value not found in the list

linkedList.reverse()
linkedList.print() // Output: 10 -> 20 -> 30 -> null