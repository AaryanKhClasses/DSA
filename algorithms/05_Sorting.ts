// 1. Bubble Sort:
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
// It is not suitable for large datasets as its average and worst-case time complexity is quite high.

function bubbleSort(arr: number[]): number[] {
    const len = arr.length
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return arr
}

// Example Usage:
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])) // Output: [11, 12, 22, 25, 34, 64, 90]

// Big-O Notation:
// The time complexity of this algorithm is O(n^2) in the worst case because we have two nested loops, each iterating through the array.
// The space complexity is O(1) because we are sorting the array in place and not using any additional data structures.

// 2. Insertion Sort:
// Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
function insertionSort(arr: number[]): number[] {
    for(let i = 1; i < arr.length; i++) {
        const key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

// Big-O Notation:
// The time complexity of this algorithm is O(n^2) in the worst case because we have a nested loop where the inner loop can run up to `n` times for each element.
// The space complexity is O(1) because we are sorting the array in place and not using any additional data structures.

// 3. Quick Sort:
// Quick sort is an efficient sorting algorithm that uses a divide-and-conquer approach to sort elements. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
function quickSort(arr: number[]): number[] {
    if(arr.length <= 1) return arr
    const pivot = arr[arr.length - 1]
    const left: number[] = []
    const right: number[] = []
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// Big-O Notation:
// The time complexity of this algorithm is O(n log n) on average, but it can degrade to O(n^2) in the worst case (e.g., when the array is already sorted).
// The space complexity is O(log n) due to the call stack used for recursion.

// 4. Merge Sort:
// Merge sort is a divide-and-conquer algorithm that divides the array into halves, sorts each half, and then merges the sorted halves back together.
function mergeSort(arr: number[]): number[] {
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return [...left, ...right].sort((a, b) => a - b)
}

// Big-O Notation:
// The time complexity of this algorithm is O(n log n) because we divide the array in half at each step and then merge the sorted halves.
// The space complexity is O(n) because we create new arrays for the left and right halves