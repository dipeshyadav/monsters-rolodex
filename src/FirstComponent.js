import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class FirstComponent extends Component {
    constructor() {
        super();
        this.state = {
            string: 'i m dky'
        }
    }
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload. This is dky hahahah
                    </p>
                    <p>{this.state.string}</p>
                    <button onClick={() => this.setState({string:'i m dky i m dky'})}>My Button</button>
                </header>
                <h1>bvjhdfvjhdbfhjvdj</h1>
            </div>
        );
    }
}

export default FirstComponent;
