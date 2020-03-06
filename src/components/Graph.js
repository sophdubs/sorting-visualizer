import React from 'react';

import Bars from "./Bars";

import "../styles/graph.css";

class Graph extends React.Component {
    render() {
        return (
            <div className="graph">
                <Bars></Bars>
            </div>
        );
    };
}

export default Graph;