// Hash Table / Hash Map
// A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values.
// Given a key, you can associate it with a value with that key for fast retrieval.

// Typically, we store the key-value pairs in an array, where the index is determined by a hash function applied to the key.
// The hash function takes the string key, converts into a hash code, and then maps it to an index in the array.
// This allows for average-case constant time complexity O(1) for lookups, insertions, and deletions.

class HashTable<K, V> {
    table: any[]
    size: number

    constructor(size: number) {
        this.table = new Array(size)
        this.size = size
    }

    // The `hash` method computes a hash code for the given key.
    // It uses a simple algorithm that sums the character codes of the key and takes the modulus of the table size.
    hash(key: K): number {
        let total = 0
        for(const char of String(key)) total += char.charCodeAt(0)
        return total % this.size    
    }

    // The `set` method adds a key-value pair to the hash table.
    // It computes the hash index for the key and stores the value at that index.
    set(key: K, value: V): void {
        const index = this.hash(key)
        this.table[index] = value
    }

    // The `get` method retrieves the value associated with a given key.
    // It computes the hash index for the key and returns the value stored at that index.
    get(key: K): V | undefined {
        const index = this.hash(key)
        return this.table[index]
    }

    // The `remove` method deletes a key-value pair from the hash table.
    // It computes the hash index for the key and sets the value at that index to undefined
    remove(key: K): void {
        const index = this.hash(key)
        this.table[index] = undefined
    }

    // The `display` method prints the contents of the hash table.
    // It iterates through the table and logs each key-value pair.
    display(): void {
        for(let i = 0; i < this.size; i++) {
            if(this.table[i] !== undefined) console.log(`Index ${i}: ${this.table[i]}`)
        }
    }
}

// Example usage:
const hashTable = new HashTable<string, number>(25)
hashTable.set('one', 1)
hashTable.set('two', 2)
hashTable.set('three', 3)
hashTable.display()

console.log("Value for key 'two': ", hashTable.get('two'))

hashTable.remove('three')
console.log("After removing 'three':")
hashTable.display()

// However, hash tables can suffer from collisions, where two different keys hash to the same index.
// Here if we try to add another key that hashes to the same index, it will overwrite the existing value.
hashTable.set('owt', 20) // 'owt' hashes to the same index as 'two'
console.log("After adding 'owt':")
hashTable.display()

// Below is one way to handle collisions:
class BetterHashTable<K, V> {
    table: any[][]
    size: number

    constructor(size: number) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key: K): number {
        let total = 0
        for(const char of String(key)) total += char.charCodeAt(0)
        return total % this.size    
    }

    set(key: K, value: V): void {
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket) this.table[index] = [[key, value]]
        else {
            const existingItem = bucket.find(item => item[0] === key)
            if(existingItem) existingItem[1] = value
            else bucket.push([key, value])
        }
    }

    get(key: K): V | undefined {
        const index = this.hash(key)
        let bucket = this.table[index]
        if(bucket) {
            const existingItem = bucket.find(item => item[0] === key)
            if(existingItem) return existingItem[1]
        }
        return undefined
    }

    remove(key: K): void {
        const index = this.hash(key)
        let bucket = this.table[index]
        if(bucket) {
            const existingItem = bucket.find(item => item[0] === key)
            if(existingItem) bucket.splice(bucket.indexOf(existingItem), 1)
        }
    }

    display(): void {
        for(let i = 0; i < this.size; i++) {
            if(this.table[i] !== undefined) console.log(`Index ${i}: ${JSON.stringify(this.table[i])}`)
        }
    }
}

// Example usage of BetterHashTable:
const betterHashTable = new BetterHashTable<string, number>(25)
betterHashTable.set('one', 1)
betterHashTable.set('two', 2)
betterHashTable.set('three', 3)
betterHashTable.display()

betterHashTable.set('owt', 20) // 'owt' hashes to the same index as 'two'
console.log("After adding 'owt':")
betterHashTable.display()
betterHashTable.set('two', 22) // Update value for 'two'
console.log("After updating 'two':")
betterHashTable.display()

betterHashTable.remove('three')
console.log("After removing 'three':")
betterHashTable.display()

// The `BetterHashTable` class handles collisions by using an array (bucket) at each index.
// Each bucket can store multiple key-value pairs, allowing for efficient retrieval and updates without overwriting existing values.
// This approach is known as separate chaining, where each index in the hash table contains a list of entries that hash to the same index.
// This allows the hash table to maintain O(1) *average* time complexity for lookups, insertions, and deletions, even in the presence of collisions.
