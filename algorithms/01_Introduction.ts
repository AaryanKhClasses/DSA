// Introduction to Algorithms:
// An *algorithm* is a step-by-step procedure or formula for solving a problem.
// It consists of a sequence of instructions that can be executed to achieve a specific goal.

// Algorithm Analysis:
// 1. **Time Complexity**: Measures the amount of time an algorithm takes to complete as a function of the input size.
// 2. **Space Complexity**: Measures the amount of memory space an algorithm uses as a function of the input size.

// Big-O Notation:
// Big-O notation is used to describe the upper bound of an algorithm's time or space complexity
// It represents the worst-case scenario of an algorithm's performance.

// Linear Time Complexity:
// An algorithm is said to have linear time complexity if its execution time grows linearly with the size of the input.
// Example:
function addLinearly(n: number): number {
    let sum = 0
    for(let i = 0; i < n; i++) sum += i
    return sum
}
// Here there are `n+2` operations: 1 initialization, `n` iterations, and 1 return.
// However, for large `n`, the constant factors become negligible, and we neglect the constant terms.
// A linear time complexity is denoted as O(n).
// This means that if the input size doubles, the time taken by the algorithm also doubles.

// Constant Time Complexity:
// An algorithm is said to have constant time complexity if its execution time does not change with the size of the input.
// Example:
function addConstantly(n: number): number {
    return n * (n + 1) / 2
}
// Instead of iterating through all numbers, we use a formula to compute the sum directly.
// Here only 1 operation is performed regardless of the input size.
// This is denoted as O(1), meaning the time taken remains constant regardless of the input size.
// In this case, the algorithm is more efficient than the linear time complexity algorithm.

// When input size is reduced by half after every iteration, the algorithm is said to have logarithmic time complexity.
// It is denoted as O(log n).
// Example of logarithmic time complexity is binary search. We will discuss it in detail later.

// Big-O Notation for Objects:
// Insertion / Deletion / Access - O(1)
// Searching / Object.keys() / Object.values() / Object.entries() - O(n)

// Big-O Notation for Arrays:
// Insertion / Deletion from End - O(1)
// Insertion / Deletion from Beginning / Middle - O(n)
// Access - O(1)
// Searching - O(n)
// ForEach / Map / Filter / Reduce - O(n)
