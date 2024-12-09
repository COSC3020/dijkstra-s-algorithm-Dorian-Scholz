const dijkstra = require('./dijkstra');

describe('Dijkstra Algorithm', () => {
    it('should find the shortest path in a simple graph', () => {
        const graph = {
            A: { B: 1, C: 4 },
            B: { A: 1, C: 2, D: 6 },
            C: { A: 4, B: 2, D: 3 },
            D: { B: 6, C: 3 }
        };

        const result = dijkstra(graph, 'A');
        expect(result).toEqual({ A: 0, B: 1, C: 3, D: 6 });
    });

    it('should handle graphs with unconnected nodes', () => {
        const graph = {
            A: { B: 1 },
            B: { A: 1, C: 2 },
            C: { B: 2 },
            D: {} // Unconnected node
        };

        const result = dijkstra(graph, 'A');
        expect(result).toEqual({ A: 0, B: 1, C: 3, D: Infinity });
    });

    it('should handle single-node graphs', () => {
        const graph = { A: {} };
        const result = dijkstra(graph, 'A');
        expect(result).toEqual({ A: 0 });
    });
});
