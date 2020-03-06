import React from 'react';

import Graph from "../components/Graph";

import "../styles/layout.css";
import "../styles/styles.css";

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <header>
                    {/* <h1>{`<h1>Sorting Algorithm Visualizer</h1>`}</h1> */}
                    <h1><span className="blue">{`<h1>`}</span>Sorting Algorithm Visualizer<span className="blue">{`</h1>`}</span></h1>
                </header>
                <main>
                    <section className="graph-section">
                        <Graph></Graph>
                        <div className="buttons">
                            <button className="sort-button"><span className="purple">{`<button>`}</span>SORT<span className="purple">{`</button>`}</span></button>
                            <button className="reset-button"><span className="purple">{`<button>`}</span>RESET<span className="purple">{`</button>`}</span></button>
                        </div>
                    </section>
                    <section className="algorithm-list-section">
                        <h2><span className="yellow">{`<h2>`}</span>Select A Sorting Algorithm<span className="yellow">{`</h2>`}</span></h2>
                        <div className="algorithm-uls">
                            <ul className="algorithm-ul-left">
                                <li><span className="pink">{`<li>`}</span>Bubble Sort<span className="pink">{`</li>`}</span></li>
                                <li><span className="pink">{`<li>`}</span>Quick Sort<span className="pink">{`</li>`}</span></li>
                                <li><span className="pink">{`<li>`}</span>Merge Sort<span className="pink">{`</li>`}</span></li>
                                <li><span className="pink">{`<li>`}</span>Insertion Sort<span className="pink">{`</li>`}</span></li>
                            </ul>
                            <ul className="algorithm-ul-right">
                                <li><span className="pink">{`<li>`}</span>Selection Sort<span className="pink">{`</li>`}</span></li>
                                <li><span className="pink">{`<li>`}</span>Heap Sort<span className="pink">{`</li>`}</span></li>
                                <li><span className="pink">{`<li>`}</span>Bucket Sort<span className="pink">{`</li>`}</span></li>
                                <li><span className="pink">{`<li>`}</span> Count Sort<span className="pink">{`</li>`}</span></li>
                            </ul>
                        </div>

                    </section>
                    <section className="info-section">

                    </section>
                </main>
            </div>
        );
    };
}

export default App;