// 1. Cartesian Product of Two Sets
// Problem: Given two sets, find their Cartesian product.
function cartesianProduct(setA: number[], setB: number[]): [number, number][] {
    const product: [number, number][] = []
    for(const a of setA) {
        for(const b of setB) product.push([a, b])
    }
    return product
}

// Example usage:
console.log(cartesianProduct([1, 2], [3, 4])) // Output: [[1, 3], [1, 4], [2, 3], [2, 4]]

// Big-O Notation:
// Time Complexity: O(n * m), where n is the size of setA and m is the size of setB.
// Space Complexity: O(n * m), for storing the Cartesian product.

// 2. Climbing Staircase
// Problem: Given n steps, find the number of distinct ways to climb to the top if you can take 1 or 2 steps at a time.
function climbStairs(n: number): number {
    const ways = [1, 2]
    for(let i = 2; i < n; i++) ways[i] = ways[i - 1] + ways[i - 2]
    return ways[n - 1]
}

// Example usage:
console.log(climbStairs(5)) // Output: 8 (ways: 1-1-1-1-1, 1-1-1-2, 1-2-1-1, 2-1-1-1, 2-2-1, 1-2-2, 2-1-2, 2-2)

// Big-O Notation:
// Time Complexity: O(n), where n is the number of steps.
// Space Complexity: O(n), for storing the number of ways to reach each step.

// 3. Tower of Hanoi
// Problem: Solve the Tower of Hanoi problem with n disks.
function towerOfHanoi(n: number, source: string, target: string, auxiliary: string): void {
    if(n === 1) return console.log(`Move disk 1 from ${source} to ${target}`)
    towerOfHanoi(n - 1, source, auxiliary, target)
    console.log(`Move disk ${n} from ${source} to ${target}`)
    towerOfHanoi(n - 1, auxiliary, target, source)
}

// Example usage:
towerOfHanoi(3, 'A', 'C', 'B') // Output: Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B, Move disk 3 from A to C, Move disk 1 from B to A, Move disk 2 from B to C, Move disk 1 from A to C

// Big-O Notation:
// Time Complexity: O(2^n), where n is the number of disks.
// Space Complexity: O(n), for the recursion stack.