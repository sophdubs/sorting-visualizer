import React from 'react';

import Graph from "../components/Graph";

import "../styles/layout.css";
import "../styles/styles.css";

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <header>
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
                        <h3><span className="green">{`<h3>`}</span>Selection: NULL<span className="green">{`</h3>`}</span></h3>
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
                                <li><span className="pink">{`<li>`}</span>Count Sort<span className="pink">{`</li>`}</span></li>
                            </ul>
                        </div>

                    </section>
                    <section className="info-section">
                        <div className="description">
                            <h4><span className="dark-blue">{`<h4>`}</span>Algorithm Description:<span className="dark-blue">{`</h4>`}</span></h4>
                            <p><span className="orange">{`<p>`}</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ratione dolor ut recusandae at consequuntur quo iure architecto doloribus, quam eius fugiat, iusto nihil. Possimus a error mollitia quam autem!<span className="orange">{`</p>`}</span></p>
                        </div>
                        <div className="runtimes">
                            <div className="run-time">
                            <h4><span className="dark-blue">{`<h4>`}</span>Algorithm Run Time:<span className="dark-blue">{`</h4>`}</span></h4>
                                <p><span className="orange">{`<p>`}</span>Lorem ipsum,  error mollitia quam autem!<span className="orange">{`</p>`}</span></p>
                            </div>
                            <div className="space-complexity">
                            <h4><span className="dark-blue">{`<h4>`}</span>Algorithm Space Complexity:<span className="dark-blue">{`</h4>`}</span></h4>
                                <p><span className="orange">{`<p>`}</span>Lorem ipsum,  error mollitia quam autem!<span className="orange">{`</p>`}</span></p>
                            </div>
                        </div>


                    </section>
                </main>
            </div>
        );
    };
}

export default App;