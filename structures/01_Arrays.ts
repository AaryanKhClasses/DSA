// Arrays:
// An array is a linear data structure that stores a collection of elements, typically of the same type.
// Arrays can be used to store multiple values in a single variable, and they are indexed starting from 0.
// In TypeScript, arrays can be defined using the `Array` type or the shorthand `[]` syntax.
// Example of an array of numbers
let numbers: number[] = [1, 2, 3]
console.log(numbers[0]) // Output: 1

// Iterating through an array
// We can use a for loop to iterate through the elements of an array.
let sumOfNumbers: number = 0
for (let i = 0; i < numbers.length; i++) sumOfNumbers += numbers[i]
console.log(sumOfNumbers) // Output: 6

// Array.push() method
// The `push` method adds one or more elements to the end of an array and returns the new length of the array.
numbers.push(4)
console.log(numbers) // Output: [1, 2, 3, 4]

// Array.unshift() method
// The `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.
numbers.unshift(0)
console.log(numbers) // Output: [0, 1, 2, 3, 4]

// Array.pop() method
// The `pop` method removes the last element from an array and returns that element.
let lastNumber = numbers.pop()
console.log(lastNumber) // Output: 4
console.log(numbers) // Output: [0, 1, 2, 3]

// Array.shift() method
// The `shift` method removes the first element from an array and returns that element.
let firstNumber = numbers.shift()
console.log(firstNumber) // Output: 0
console.log(numbers) // Output: [1, 2, 3]

// Array.slice() method
// The `slice` method returns a shallow copy of a portion of an array into a new array object.
let slicedNumbers = numbers.slice(1, 3) // This will return elements from index 1 to index 2 (not including index 3)
console.log(slicedNumbers) // Output: [2, 3]

// Array.splice() method
// The `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The first argument is the index at which to start changing the array, the second argument is the number of elements to remove.
let removedNumbers = numbers.splice(1, 1) // This will remove 1 element at index 1
console.log(removedNumbers) // Output: [2]
console.log(numbers) // Output: [1, 3]
// It can also be used to add elements:
// Any subsequent arguments are the elements to add to the array.
numbers.splice(1, 0, 2) // This will add 2 at index 1 without removing any elements
console.log(numbers) // Output: [1, 2, 3]

// Array.concat() method
// The `concat` method is used to merge two or more arrays. It does not change the existing arrays but instead returns a new array.
let moreNumbers = [4, 5, 6]
let allNumbers = numbers.concat(moreNumbers)
console.log(allNumbers) // Output: [1, 2, 3, 4, 5, 6]

// Array.indexOf() method
// The `indexOf` method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOfTwo = numbers.indexOf(2)
console.log(indexOfTwo) // Output: 1

// Array.includes() method
// The `includes` method determines whether an array includes a certain element, returning true or false as appropriate.
let hasThree = numbers.includes(3)
console.log(hasThree) // Output: true
let hasFive = numbers.includes(5)
console.log(hasFive) // Output: false

// Array.forEach() method
// The `forEach` method executes a provided function once for each array element.
numbers.forEach((num) => {
  console.log(num) // Output: 1, 2, 3
})

// Array.map() method
// The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
let doubledNumbers = numbers.map((num) => num * 2)
console.log(doubledNumbers) // Output: [2, 4, 6]

// Array.filter() method
// The `filter` method creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers) // Output: [2]

// Array.reduce() method
// The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.
let totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(totalSum) // Output: 6

// Array.sort() method
// The `sort` method sorts the elements of an array in place and returns the sorted array
let sortedNumbers = numbers.slice().sort((a, b) => b - a) // Sorting in descending order
console.log(sortedNumbers) // Output: [3, 2, 1]

// Array.reverse() method
// The `reverse` method reverses the elements of an array in place and returns the reversed array.
let reversedNumbers = numbers.slice().reverse() // Reversing the array
console.log(reversedNumbers) // Output: [3, 2, 1]
