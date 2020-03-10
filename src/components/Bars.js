import React from 'react';

import { generateShuffledArray, populateGraph } from "../helpers";

class Bars extends React.Component {
    componentDidMount() {
        populateGraph();
    }
    
    render() {
        return (
            <div className="bars">
                <ul className="bar-list">

                </ul>
            </div>
        );
    };
}

export default Bars;