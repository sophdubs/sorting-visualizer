import React from 'react';

import { generateShuffledArray, populateGraph } from "../helpers";

class Bars extends React.Component {
    componentDidMount() {
        // const list = document.querySelector('.bar-list');
        // const barList = [];
        // const nums = generateShuffledArray();
        // for (let i = 0; i < nums.length; i++) {
        //     barList.push(`<li class="bar index${nums[i]}" style="grid-area: a${i}; height:${nums[i]}%;">${nums[i]}</li>`);
        // }
        // list.innerHTML = barList.join('');
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