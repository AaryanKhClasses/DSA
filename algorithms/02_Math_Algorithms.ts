// 1. Fibonacci Sequence:
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

// Problem: Given the number of terms `n`, generate the Fibonacci sequence up to `n` terms.
function fibonacci(n: number): number[] {
    const fib: number[] = [0, 1]
    for(let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2]
    return fib
}

// Example Usage:
console.log(fibonacci(10)) // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Big-O Notation:
// The time complexity of this algorithm is O(n) because we iterate through the loop `n` times.
// The space complexity is also O(n) because we store the Fibonacci sequence in an array of size `n`.

// 2. Factorial Calculation:
// The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.

// Problem: Given a non-negative integer `n`, calculate its factorial.
function factorial(n: number): number {
    if (n < 0) throw new Error("Factorial is not defined for negative numbers")
    let result = 1
    for(let i = 2; i <= n; i++) result *= i
    return result
}

// Example Usage:
console.log(factorial(5)) // Output: 120

// Big-O Notation:
// The time complexity of this algorithm is O(n) because we iterate through the loop `n` times.
// The space complexity is O(1) because we use a constant amount of space for the result variable.

// 3. Prime Number Check:
// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.

// Problem: Given a number `n`, check if it is a prime number.
function isPrime(n: number): boolean {
    if(n <= 1) return false
    let prime = true
    for(let i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) prime = false
    return prime
}

// Example Usage:
console.log(isPrime(7)) // Output: true
console.log(isPrime(10)) // Output: false

// Big-O Notation:
// The time complexity of this algorithm is O(sqrt(n)) because we only need to check divisibility up to the square root of `n`.
// The space complexity is O(1) because we use a constant amount of space for the `prime` variable.

// 4. Power of 2:
// A number is a power of 2 if it can be expressed as 2 raised to an integer exponent.

// Problem: Given a number `n`, check if it is a power of 2.
function isPowerOfTwo(n: number): boolean {
    if(n < 1) return false
    while(n > 1) {
        if(n % 2 !== 0) return false
        n /= 2
    }
    return true
}

// Big-O Notation:
// Here we repeatedly divide `n` by 2 until it becomes 1 or an odd number. Hence, the time complexity is O(log n) because we are halving `n` in each iteration.
// The space complexity is O(1) because we use a constant amount of space for the variable `n`.

function betterIsPowerOfTwo(n: number): boolean {
    if(n < 1) return false
    return (n & (n - 1)) === 0 // Bitwise operation to check if `n` is a power of 2
}

// Example Usage:
console.log(betterIsPowerOfTwo(8)) // Output: true
console.log(betterIsPowerOfTwo(10)) // Output: false

// Big-O Notation:
// The time complexity of this algorithm is O(1) because we perform a constant number of operations.
// The space complexity is also O(1) because we use a constant amount of space for the result.
