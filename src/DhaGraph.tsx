/* Copyright Header Placeholder */
/* Name: DhaGraph.tsx
 * Description: Graph component from dha-graph npm package
 * Author: Created by Alex Alden Weaver on 6-11-2024
 * Last modified: 6-11-2024 by Alex Alden Weaver
*/

import { Graph } from 'dha-graph';
import 'dha-graph/dist/style.css';

function DhaGraph() {
    const myData: object[] = [
        { date: '12/20/2018', Anxiety: 0, Depression: 0 },
        { date: '12/21/2018', Anxiety: 88, Depression: 20 },
        { date: '12/22/2018', Anxiety: 4, Depression: 31 },
        { date: '12/26/2018', Anxiety: 71, Depression: 24 },
        { date: '12/27/2018', Anxiety: 50, Depression: 50 },
        { date: '12/30/2018', Anxiety: 30, Depression: 80 },
    ];

    return (
    <div className="DhaGraph">

        <Graph
            data={myData}
            title="Mood Tracker"
            dataKey="date"
            dataLines={[
                {
                dataName: 'Anxiety',
                lineName: 'Anxiety Level',
                strokeColor: '#00c',
                },
                {
                dataName: 'Depression',
                lineName: 'Depression Level',
                strokeColor: '#ff0800',
                },
            ]}
        />

    </div>
    )
}

export default DhaGraph
