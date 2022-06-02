import Graph from "../../../app/Classes/Graph/Graph";

describe('Graph test suite', () => {
  it('should create a Graph', () => {
    const graph = new Graph();

    const expectedAdjList = {
      'A': ['B', 'C'],
      'B': ['A', 'D'],
      'C': ['A', 'E'],
      'D': ['B', 'E', 'F'],
      'E': ['C', 'D', 'F'],
      'F': ['D', 'E'],
    };

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    graph.addEdge('D', 'F');
    graph.addEdge('E', 'F');
    graph.addEdge('G', 'B');
    graph.addEdge('H', 'G');
    graph.addEdge('A', 'I');

    graph.removeVertex('I');
    graph.removeVertex('H');
    graph.removeVertex('G');

    expect(graph.adjacencyList).toEqual(expectedAdjList);

    expect(graph.recuriveDFS('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);

    expect(graph.iterativeDFS('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);

    expect(graph.BFS('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});