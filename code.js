function dijkstra(graph, sourceNode)
{
    
    const distances = {};
    const visited = {};
    const priorityQueue = [];

    
    for (const node in graph) 
    {
        distances[node] = Infinity;
    }
    distances[sourceNode] = 0;

    
    priorityQueue.push({ node: sourceNode, distance: 0 });

   
    const sortQueue = () => priorityQueue.sort((a, b) => a.distance - b.distance);

    while (priorityQueue.length > 0)
    {
        
        sortQueue();
        const { node: currentNode } = priorityQueue.shift();

       
        if (visited[currentNode]) continue;
        visited[currentNode] = true;

        
        for (const neighbor in graph[currentNode])
        {
            const weight = graph[currentNode][neighbor];
            const newDistance = distances[currentNode] + weight;

            if (newDistance < distances[neighbor]) 
            {
                distances[neighbor] = newDistance;

                
                priorityQueue.push({ node: neighbor, distance: newDistance });
            }
        }
    }

    return distances;
}
