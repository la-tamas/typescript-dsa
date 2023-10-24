import Stack from '../Stack/OptimzedStack';
import Queue from '../Queue/OptimizedQueue';

type VisitedType = {
  [x: string]: boolean
}

export default class Graph {
  adjacencyList: Record<string, Array<string>> = {}

  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  removeVertex(vertex: string) {
    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      const adjacentVertex = this.adjacencyList[vertex][i]
      this.removeEdge(vertex, adjacentVertex!)
    }
    delete this.adjacencyList[vertex]
  }

  addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1)
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2)
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1)
  }

  recuriveDFS(start: string): String[] {
    const result: String[] = [];
    const visited: VisitedType = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex: string) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start)

    return result;
  }

  iterativeDFS(start: string): String[] {
    const stack = new Stack<string>();
    const result: String[] = [];
    const visited: VisitedType = {};

    stack.add(start);
    visited[start] = true;

    while(stack.size > 0) {
      let currentVertex = stack.remove();
      result.push(currentVertex!);
      this.adjacencyList[currentVertex!].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.add(neighbor);
        }
      });
    }

    return result;
  }

  BFS(start: string): String[] {
    const queue = new Queue<string>();
    const result = [];
    const visited: VisitedType = {};
    let currentVertex;

    queue.add(start);
    visited[start] = true;

    while(queue.size) {
        currentVertex = queue.remove();
        result.push(currentVertex!);
        this.adjacencyList[currentVertex!].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.add(neighbor!);
            }
        });
    }

    return result;
  }
}