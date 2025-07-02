// Recursions:
// Recursion is a technique where a function calls itself to solve a problem.
// It is often used to solve problems that can be broken down into smaller, similar subproblems.
// Recursion can be more elegant and easier to understand than iterative solutions, but it can also lead to performance issues if not used carefully.
// We would solve some of the problems from the previous file using recursion.

// 1. Fibonacci Series:
// Problem: Given a number `n`, return the sum of the first `n` Fibonacci numbers using recursion.
function recursiveFibonacci(n: number): number {
    if (n < 2) return n
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

// Example Usage:
console.log(recursiveFibonacci(10)) // Output: 55

// Big-O Notation:
// The time complexity of this algorithm is O(2^n) because each call to `recursiveFibonacci` generates two more calls, leading to an exponential growth in the number of calls.
// The space complexity is O(n) due to the call stack used for recursion, which can grow up to `n` levels deep in the worst case.

// Remember that the original algorithm had a time complexity of O(n), which is much more efficient than the recursive version.

// 2. Factorial Calculation:
// Problem: Given a number `n`, return the factorial of `n` using recursion.
function recursiveFactorial(n: number): number {
    if (n < 0) throw new Error("Factorial is not defined for negative numbers")
    if (n === 0 || n === 1) return 1
    return n * recursiveFactorial(n - 1)
}

// Example Usage:
console.log(recursiveFactorial(5)) // Output: 120

// Big-O Notation:
// The time complexity of this algorithm is O(n) because we make `n` recursive calls.
// The space complexity is O(n) due to the call stack used for recursion, which can grow up to `n` levels deep in the worst case.

// Remember that the original algorithm also had a time complexity of O(n), but the recursive version is more elegant.
