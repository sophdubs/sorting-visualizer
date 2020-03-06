import React from 'react';

import Graph from "../components/Graph";

import "../styles/styles.css";

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <header>
                    <h1>{`<h1>Sorting Algorithm Visualizer</h1>`}</h1>
                </header>
                <main>
                    <section id="graph">
                        <Graph></Graph>
                    </section>
                    <section id="algorithm-list">

                    </section>
                    <section id="info">

                    </section>
                </main>
            </div>
        );
    };
}

export default App;