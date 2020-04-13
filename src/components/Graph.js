export class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
    this.verticesInGraph = new Set()
  }

    addVertex(v) {
      v = parseInt(v)
      this.AdjList.set(v, [])
    }

    addEdge(v, w) {
      v = parseInt(v)
      w = parseInt(w)
      this.AdjList.get(v) ? this.AdjList.get(v).push(w) : this.AdjList.set(v, [w])
      this.AdjList.get(w) ? this.AdjList.get(w).push(v) : this.AdjList.set(w, [v])
    }

    getGraph() {
      return this.AdjList
    }

    dfs(v) {
      const visited = []
      for (let i = 0; i < this.noOfVertices ; i++) {
        visited[i] = false
      }

      this.DFSUtil(v, visited)
      return this.verticesInGraph
    }

    DFSUtil(vert, visited) {
      visited[vert] = true
      this.verticesInGraph.add(vert)

      let getNeighbors = this.AdjList.get(vert)

      for (var i in getNeighbors) {
        let getElem = getNeighbors[i]
        if (!visited[getElem]) {
          this.DFSUtil(getElem, visited)
        }
      }
    }
}
