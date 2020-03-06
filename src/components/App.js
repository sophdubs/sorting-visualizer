import React from 'react';

import Graph from "../components/Graph";

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

                    </section>
                    <section className="info-section">

                    </section>
                </main>
            </div>
        );
    };
}

export default App;