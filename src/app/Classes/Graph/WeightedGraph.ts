import PriorityQueue from '../BinaryHeap/PriorityQueue';

type PrevType = {
  [n: string]: string | null;
}

type DistanceType = {
  [n: string]: number;
}

type ListItem = {
  node: string;
  weight: number;
}

export default class WeightedGraph {
  adjacencyList: Record<string, Array<ListItem>> = {}

  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex: string) {
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
      this.adjacencyList[vertex1].push({ node:vertex2, weight });
      this.adjacencyList[vertex2].push({ node:vertex1, weight });
  }

  dijsktra(start: string, finish: string): Array<string | null> {
    const path: Array<string | null> = [];
    const nodes = new PriorityQueue<string>();
    const distances: DistanceType = {};
    const previous: PrevType = {};
    let smallest: string | null;
    for(let vertex in this.adjacencyList) {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
      previous[vertex] = null;
    }

    distances[start] = 0;
    nodes.enqueue(start, 0);

    while(nodes.values.length) {
      smallest = nodes.dequeue()!.value;
      if (smallest === finish) {
        while(previous[smallest!]) {
          path.push(smallest);
          smallest = previous[smallest!];
        }
        break;
      }
      if (smallest || distances[smallest!] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest!]) {
          let nextNode = this.adjacencyList[smallest!][neighbor];
          let candidate = distances[smallest!] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(start).reverse();
  }
}