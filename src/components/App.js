import React from 'react';
import Graph from "../components/Graph";

import "../styles/layout.css";
import "../styles/styles.css";

import { data } from "../data";
import { algorithms } from "../algorithms";
import { swap } from "../helpers";
import { populateGraph } from "../helpers";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 'default',
            speed: 63
        }
    }

    handleClick = (e) => {
        const selected = e.target.dataset.type;
        this.setState({selected});
    }

    handleSort = () => {
        if (this.state.selected === 'default'){
            alert('Please select a sorting algorithm from the list');
        }
        if (document.querySelector('.bar').classList.contains('sorted')) {
            console.log('this is sorted!!');
            populateGraph();
        }
        let bars = Array.from(document.querySelectorAll(".bar-list li"));
        bars = bars.map(bar => parseInt(bar.innerHTML));
        if (this.state.selected !== 'default') {
            const moves = algorithms[this.state.selected](bars);
            swap(moves, this.state.speed, this);
        } 
    }

    handleReset = () => {
        window.location.reload(true);
    }

    handleSliderChange = (e) => {
        let speed = e.target.value;
        this.setState({speed});
    }

    //Set state to be equal to local storage stuff
    componentDidMount() {
        if (localStorage.getItem('sorting-app')){
            let speed = JSON.parse(localStorage.getItem('sorting-app')).speed;
            let selected = JSON.parse(localStorage.getItem('sorting-app')).selected;
            this.setState({speed, selected});
        } else {
            localStorage.setItem('sorting-app', JSON.stringify(this.state));
        }
    }

    //This is called anytime state is changed so use it to backup local storage
    componentDidUpdate() {
        localStorage.setItem('sorting-app', JSON.stringify(this.state)); 
    }
  
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
                            <button className="sort-button" onClick={this.handleSort}><span className="purple">{`<button>`}</span>SORT<span className="purple">{`</button>`}</span></button>
                            <button className="reset-button" onClick={this.handleReset}><span className="purple">{`<button>`}</span>RESET<span className="purple">{`</button>`}</span></button>
                            <div className="range">
                                <input type="range" min={0} max={125} value={this.state.speed} onChange={this.handleSliderChange} className="slider" id="slider"/>
                                <span className="slow-range-label">slow</span>
                                <span className="fast-range-label">fast</span>
                            </div>
                        </div>
                    </section>
                    <section className="algorithm-list-section">
                        <h2><span className="yellow">{`<h2>`}</span>Select a Sorting Algorithm<span className="yellow">{`</h2>`}</span></h2>
                        <h3><span className="green">{`<h3>`}</span>Selection: {data[this.state.selected].type === 'Algorithm' ? 'NULL' : data[this.state.selected].type}<span className="green">{`</h3>`}</span></h3>
                        <div className="algorithm-uls">
                            <ul className="algorithm-ul-left">
                                <li data-type="bubbleSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Bubble Sort<span className="pink">{`</li>`}</span></li>
                                <li data-type="quickSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Quick Sort<span className="pink">{`</li>`}</span></li>
                                <li data-type="mergeSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Merge Sort<span className="pink">{`</li>`}</span></li>
                                <li data-type="insertionSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Insertion Sort<span className="pink">{`</li>`}</span></li>
                            </ul>
                            <ul className="algorithm-ul-right">
                                <li data-type="selectionSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Selection Sort<span className="pink">{`</li>`}</span></li>
                                <li data-type="heapSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Heap Sort<span className="pink">{`</li>`}</span></li>
                                <li data-type="shakerSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Shaker Sort<span className="pink">{`</li>`}</span></li>
                                <li data-type="countSort" onClick={this.handleClick}><span className="pink">{`<li>`}</span>Count Sort<span className="pink">{`</li>`}</span></li>
                            </ul>
                        </div>

                    </section>
                    <section className="info-section">
                        <div className="description">
                            <h4><span className="dark-blue">{`<h4>`}</span>{data[this.state.selected].type} Description:<span className="dark-blue">{`</h4>`}</span></h4>
                            <p><span className="orange">{`<p>`}</span>{data[this.state.selected].description}<span className="orange">{`</p>`}</span></p>
                        </div>
                        <div className="runtimes">
                            <div className="run-time">
                            <h4><span className="dark-blue">{`<h4>`}</span>{data[this.state.selected].type} Run Time:<span className="dark-blue">{`</h4>`}</span></h4>
                                <p><span className="orange">{`<p>`}</span>{data[this.state.selected].runtime}<span className="orange">{`</p>`}</span></p>
                            </div>
                            <div className="space-complexity">
                            <h4><span className="dark-blue">{`<h4>`}</span>{data[this.state.selected].type} Space Complexity:<span className="dark-blue">{`</h4>`}</span></h4>
                                <p><span className="orange">{`<p>`}</span>{data[this.state.selected].space}<span className="orange">{`</p>`}</span></p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    };
}

export default App;