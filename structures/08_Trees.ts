// Trees:
// A tree is a hierarchical, non-linear data structure that consists of nodes connected by edges.
// Each tree has a root node, which is the topmost node, and can have zero or more child nodes.
// Trees are used to represent hierarchical relationships, such as file systems, organizational structures, and more.

// Terminologies:
// - Node: A single element in the tree.
// - Root: The topmost node in the tree.
// - Leaf: A node with no children.
// - Parent: A node that has one or more child nodes.
// - Child: A node that is a descendant of another node.
// - Sibling: Nodes that share the same parent.
// - Depth: The length of the path from the root to a node.
// - Height: The length of the longest path from a node to a leaf.
// - Level: The depth of a node in the tree, starting from 0 for the root.
// - Degree: The number of children a node has.
// - Subtree: A tree formed by a node and its descendants.
// - Binary Tree: A tree where each node has at most two children (left and right).

// Binary Tree:
// A binary tree is a tree data structure where each node has at most two children, referred to as the left child and the right child.

// Binary Search Tree (BST):
// A binary search tree is a binary tree where the left child is less than the parent node and the right child is greater than the parent node.

// A tree node represents an element in the tree.
// It contains a value and references to its left and right children.
class TreeNode<T> {
    value: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null

    constructor(value: T) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// The BinarySearchTree class represents a binary search tree.
class BinarySearchTree<T> {
    root: TreeNode<T> | null

    constructor() {
        this.root = null
    }

    // The `isEmpty` method checks if the binary search tree is empty.
    // It returns true if the root is null, indicating that there are no nodes in the tree.
    isEmpty(): boolean {
        return this.root === null
    }

    // The `insert` method adds a new value to the binary search tree.
    // It creates a new TreeNode and places it in the correct position based on the binary search tree property.
    insert(value: T): void {
        const node = new TreeNode(value)
        if(this.isEmpty()) this.root = node
        else this.insertNode(this.root!, node)
    }
    
    // The `insertNode` method is a helper function that recursively finds the correct position for the new node.
    private insertNode(root: TreeNode<T>, node: TreeNode<T>): void {
        if(node.value < root.value) {
            if(root.left === null) root.left = node
            else this.insertNode(root.left, node)
        } else {
            if(root.right === null) root.right = node
            else this.insertNode(root.right, node)
        }
    }

    // The `search` method checks if a value exists in the binary search tree.
    // It returns true if the value is found, otherwise recursively searches the left or right subtree based on the value.
    search(root: TreeNode<T> | null, value: T): boolean {
        if(!root) return false
        if(root.value === value) return true
        if(value < root.value) return this.search(root.left, value)
        return this.search(root.right, value)
    }

    // DFS: Depth First Search
    // The `dfs` algorithm traverses the binary search tree starting from the root node and explores as far as possible along each branch before backtracking.
    // There are 3 types of DFS traversals:
    // 1. pre-order (Root, Left, Right)
    // Here, the root node is processed first, followed by the left subtree and then the right subtree.
    preOrder(root: TreeNode<T> | null): void {
        if(!root) return
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

    // 2. in-order (Left, Root, Right)
    // In this traversal, the left subtree is processed first, followed by the root node, and finally the right subtree.
    inOrder(root: TreeNode<T> | null): void {
        if(!root) return
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }

    // 3. post-order (Left, Right, Root)
    // In this traversal, the left subtree is processed first, followed by the right subtree, and finally the root node.
    postOrder(root: TreeNode<T> | null): void {
        if(!root) return
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }

    // BFS: Breadth First Search
    // The `bfs` algorithm traverses the binary search tree level by level, starting from the root node.
    // It uses a queue to keep track of the nodes at each level.
    levelOrder(root: TreeNode<T> | null): void {
        if(!root) return
        const queue: TreeNode<T>[] = []
        queue.push(root)
        while(queue.length > 0) {
            const current = queue.shift()!
            console.log(current.value)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
    }

    // The `min` method finds the minimum value in the binary search tree.
    // It starts from the root and keeps traversing the left child until it reaches a leaf.
    min(root: TreeNode<T> | null): T | null {
        if(!root) return null
        if(!root.left) return root.value
        return this.min(root.left)
    }

    // The `max` method finds the maximum value in the binary search tree.
    // It starts from the root and keeps traversing the right child until it reaches a leaf.
    max(root: TreeNode<T> | null): T | null {
        if(!root) return null
        if(!root.right) return root.value
        return this.max(root.right)
    }

    // The `delete` method removes a value from the binary search tree.
    // It finds the node with the specified value and removes it while maintaining the binary search tree properties.
    delete(value: T): void {
        this.root = this.deleteNode(this.root, value)
    }

    // The `deleteNode` method is a helper function that recursively finds the node to delete and adjusts the tree accordingly.
    private deleteNode(root: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if(root === null) return root
        if(value < root.value) root.left = this.deleteNode(root.left, value)
        else if(value > root.value) root.right = this.deleteNode(root.right, value)
        else {
            // Node with no child:
            if(!root.left && !root.right) return null
            // Node with one child (Replace with child):
            if(!root.left) return root.right
            if(!root.right) return root.left
            // Node with two children (Find the inorder successor):
            const minNode = this.min(root.right)
            if(!minNode) return null
            root.value = minNode // Replace value with inorder successor
            root.right = this.deleteNode(root.right, minNode) // Delete the inorder successor
            return root
        }
        return root
    }
}

// Example Usage of Binary Search Tree
const BST = new BinarySearchTree<number>()
console.log("Is the BST empty?", BST.isEmpty()) // true

BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(3)
BST.insert(7)

console.log(BST.search(BST.root, 5)) // true
console.log(BST.search(BST.root, 20)) // false

BST.preOrder(BST.root) // 10, 5, 3, 7, 15
BST.inOrder(BST.root) // 3, 5, 7, 10, 15
BST.postOrder(BST.root) // 3, 7, 5, 15, 10
BST.levelOrder(BST.root) // 10, 5, 15, 3, 7

BST.insert(20)
console.log("Minimum value in BST:", BST.min(BST.root)) // 3
console.log("Maximum value in BST:", BST.max(BST.root)) // 20

BST.delete(5)
console.log("After deleting 5:")
BST.levelOrder(BST.root) // 10, 7, 15, 3, 20

BST.delete(10)
console.log("After deleting 10:")
BST.levelOrder(BST.root) // 15, 7, 20, 3
