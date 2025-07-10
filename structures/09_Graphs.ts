// Graphs:
// A graph is a collection of nodes (or vertices) and edges connecting them.
// Unlike trees, graphs can have cycles and do not have a strict hierarchical structure.
// Graphs can be categorized into two types based on the nature of their edges:
// 1. Directed Graphs: Edges have a direction, going from one vertex to another.
// 2. Undirected Graphs: Edges do not have a direction, connecting two vertices bidirectionally.
// Graphs can be used to represent networks, social connections, transportation systems, and more.

// Graphs can be represented using two main structures:
// 1. Adjacency Matrix: A 2D array where the cell at row i and column j indicates whether there is an edge from vertex i to vertex j.
/* Example: If there are 3 vertices A, B, C where A is connected to B and B is connected to C, the adjacency matrix would look like this:
    A   B   C
    0   1   0
    1   0   1
    0   1   0
*/

// 2. Adjacency List: An array of lists where each index represents a vertex and contains a list of adjacent vertices.
// Example: If there are 3 vertices A, B, C where A is connected to B and B is connected to C, the adjacency list would look like this:
// A: [B]
// B: [A, C]
// C: [B]

// Difference between Adjacency Matrix and Adjacency List:
// - Adjacency Matrix is a 2D array, while Adjacency List is an array of lists.
// - Adjacency Matrix uses more space, especially for sparse graphs, while Adjacency List is more space-efficient.
// - Adjacency Matrix allows for quick edge existence checks, while Adjacency List is more efficient for iterating over neighbors.

class Graph {
    adjacencyList: {}
    constructor() {
        this.adjacencyList = {}
    }

    // The `addEdge` method adds an edge between two vertices in the graph.
    // It creates an entry for each vertex in the adjacency list if it doesn't already exist.
    addVertex(vertex: string): void {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set()
    }

    // The `addEdge` method connects two vertices by adding each vertex to the other's adjacency list.
    addEdge(vertex1: string, vertex2: string): void {
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2)
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1) // For undirected graph
    }

    // The `display` method prints the adjacency list of the graph.
    display(): void {
        for(const vertex in this.adjacencyList) console.log(`${vertex} -> [${[...this.adjacencyList[vertex]]}]`)
    }

    // The `hasEdge` method checks if there is an edge between two vertices.
    hasEdge(vertex1: string, vertex2: string): boolean {
        return this.adjacencyList[vertex1].has(vertex2)
    }

    // The `removeEdge` method removes the edge between two vertices.
    removeEdge(vertex1: string, vertex2: string): void {
        if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].delete(vertex2)
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].delete(vertex1)
    }

    // The `removeVertex` method removes a vertex and all its edges from the graph.
    removeVertex(vertex: string): void {
        if(!this.adjacencyList[vertex]) return
        for(const adjacent of this.adjacencyList[vertex]) {
            this.adjacencyList[adjacent].delete(vertex)
        }
        delete this.adjacencyList[vertex]
    }
}

// Example usage:
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph.display() // Output: A -> [B], B -> [A, C], C -> [B]

console.log(graph.hasEdge('A', 'B')) // true
console.log(graph.hasEdge('A', 'C')) // false

graph.removeEdge('A', 'B')
console.log(graph.hasEdge('A', 'B')) // false

graph.removeVertex('A')
graph.display() // Output: B -> [C], C -> [B]
graph.removeVertex('B')
graph.display() // Output: C -> []
