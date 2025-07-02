// 1. Linear Search:
// Linear search is a simple search algorithm that checks every element in a list until it finds the target value or reaches the end of the list.

// Problem: Given an array of numbers and a target number, find the index of the target number in the array using linear search. If not found, return -1.
function linearSearch(arr: number[], target: number): number {
    let index = 0
    arr.map((num, idx) => {
        if(num === target) index = idx
    })
    return index >= arr.length ? -1 : index
}

// Example Usage:
console.log(linearSearch([1, 2, 3, 4, 5], 3)) // Output: 2

// Big-O Notation:
// The time complexity of this algorithm is O(n) because we may need to check every element in the array in the worst case.
// The space complexity is O(1) because we use a constant amount of space for the `index` variable.

// 2. Binary Search:
// Binary search is a more efficient search algorithm that works on sorted arrays. It repeatedly divides the search interval in half until the target value is found or the interval is empty.

// Problem: Given a sorted array of numbers and a target number, find the index of the target number in the array using binary search. If not found, return -1.
function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] === target) return mid
        else if(arr[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return -1
}

// Big-O Notation:
// The time complexity of this algorithm is O(log n) because we halve the search space with each iteration.
// The space complexity is O(1) because we use a constant amount of space for the `left`, `right`, and `mid` variables.

// 3. Recursive Binary Search:
// Recursive binary search is a variation of binary search that uses recursion to find the target value in a sorted array.

function recursiveBinarySearch(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
    if(left > right) return -1
    const mid = Math.floor((left + right) / 2)
    if(arr[mid] === target) return mid
    else if(arr[mid] < target) return recursiveBinarySearch(arr, target, mid + 1, right)
    else return recursiveBinarySearch(arr, target, left, mid - 1)
}

// Big-O Notation:
// The time complexity of this algorithm is O(log n) because we halve the search space with each recursive call.
// The space complexity is O(log n) due to the call stack used for recursion, which can grow up to `log n` levels deep in the worst case.

