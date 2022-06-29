import React, { Component } from 'react';

class CounterApp extends Component {
    state = {
        count: 1
    }

    num = 10;
    constructor() {
        super();
        console.log("CounterApp.constructor()");
    }

    componentDidMount() {
        console.log("CounterApp.componentDidMount()");
    }

    render() {

        return (
            <div className="container">
                <h2 className='alert alert-info'>{this.props.title}</h2>
                <h3>the state Value:  {this.state.count}</h3>
                <h3>current num Value:  {this.num}</h3>
                <hr />

                <button
                    className='btn btn-primary'
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 })
                    }}
                >Increment State</button>

                <button
                    className='btn btn-danger'
                    onClick={() => {
                        console.log("Num Value ", this.num);
                        this.num++;
                        // you are forcing render to be called... 
                        this.forceUpdate();
                    }}
                >Increment NUM</button>
            </div>
        );
    }

    componentWillUnmount() {
        console.log("CounterApp.componentWillUnmount()");
    }

    componentDidUpdate() {
        console.log("CounterApp.componentDidUpdate()");
    }

    shouldComponentUpdate() {
        console.log("CounterApp.shouldComponentUpdate()");
        return false;
    }

}

export default CounterApp;