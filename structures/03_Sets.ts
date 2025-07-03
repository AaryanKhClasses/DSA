// Sets:
// A set is a collection of unique values. It is similar to an array, but it does not allow duplicate values.
// They can contain any type of values, including objects and functions.
// Insertion order of elements is not guaranteed, which makes searching and deleting elements faster than arrays.
// To create a set, use the `Set` constructor.
const set = new Set([1, 2, 3])
console.log(set) // Set { 1, 2, 3 }

// To access the elements of a set, you can use the `forEach` method or the `for...of` loop.
set.forEach((value) => console.log(value)) // Output: 1, 2, 3
for(const item of set) console.log(item) // Output: 1, 2, 3

// Set.add() method:
// To add a new value to a set, use the `add` method. If the value already exists, it will not be added again.
set.add(4)
console.log(set) // Set { 1, 2, 3, 4 }
set.add(2) // Duplicate value, will not be added
console.log(set) // Set { 1, 2, 3, 4 }

// Set.has() method:
// To check if a value exists in a set, use the `has` method. It returns `true` if the value exists, otherwise `false`.
console.log(set.has(2)) // true
console.log(set.has(5)) // false

// Set.delete() method:
// To remove a value from a set, use the `delete` method. It returns `true` if the value was removed, otherwise `false`.
set.delete(4)
console.log(set) // Set { 1, 2, 3 }
console.log(set.delete(5)) // false, value not found

// Set.size property:
// To get the number of elements in a set, use the `size` property.
console.log(set.size) // 3

// Set.clear() method:
// To remove all elements from a set, use the `clear` method.
set.clear()
console.log(set) // Set {}
