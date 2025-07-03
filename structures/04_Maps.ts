// Maps:
// A Map is a collection of key-value pairs where keys can be of any type and are unique.
// Maps maintain the insertion order of elements, which makes them suitable for scenarios where the order of elements matters.
// In TypeScript, you can create a Map using the `Map` constructor.
// You must define the types for keys and values when creating a Map.

// Maps are ordered collections of key-value pairs as opposed to objects which are unordered.
// Maps allow keys of any type, including objects, and they maintain the order of insertion.
// Objects aren't iterable in the same way as arrays or sets, but Maps are iterable.

// Example of creating a Map
const map = new Map<string, number>([['one', 1], ['two', 2], ['three', 3]])
console.log(map) // Output: Map { 'one' => 1, 'two' => 2, 'three' => 3 }

for(const [key, value] of map) console.log(`${key}: ${value}`) // Output: one: 1, two: 2, three: 3

// Map.set() method
// The `set` method adds a new key-value pair to the Map. If the key already exists, it updates the value.
map.set('four', 4)
console.log(map) // Output: Map { 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4 }

// Map.has() method
// The `has` method checks if a key exists in the Map. It returns `true` if the key exists, otherwise `false`.
console.log(map.has('two')) // Output: true
console.log(map.has('five')) // Output: false

// Map.get() method
// The `get` method retrieves the value associated with a key in the Map. If the key does not exist, it returns `undefined`.
console.log(map.get('three')) // Output: 3
console.log(map.get('five')) // Output: undefined, key not found

// Map.delete() method
// The `delete` method removes a key-value pair from the Map. It returns `true` if the key was found and removed, otherwise `false`.
map.delete('four')
console.log(map) // Output: Map { 'one' => 1, 'two' => 2, 'three' => 3 }
console.log(map.delete('five')) // Output: false, key not found

// Map.size property
// The `size` property returns the number of key-value pairs in the Map.
console.log(map.size) // Output: 3

// Map.clear() method
// The `clear` method removes all key-value pairs from the Map.
map.clear()
console.log(map) // Output: Map {}
