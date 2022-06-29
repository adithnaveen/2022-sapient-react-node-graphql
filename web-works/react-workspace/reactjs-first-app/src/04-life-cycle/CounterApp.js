import React, { Component } from 'react';

class CounterApp extends Component {
    state = {
        count: 1
    }

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
                <h2 className='alert alert-info'>Counter Application/Life cycle </h2>
                <h3>the state Value:  {this.state.count}</h3>
                <hr />

                <button
                    className='btn btn-primary'
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 })
                    }}
                >Increment State</button>


            </div>
        );
    }

    componentWillUnmount() {
        console.log("CounterApp.componentWillUnmount()");
    }

    componentDidUpdate() {
        console.log("CounterApp.componentDidUpdate()");
    }

}

export default CounterApp;