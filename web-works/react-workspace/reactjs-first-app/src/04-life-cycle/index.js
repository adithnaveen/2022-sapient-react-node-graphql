import React, { Component } from 'react'
import CounterApp from './CounterApp';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


class App extends Component {
    state = {
        showHideApp: true
    }
    render() {

        let output = null;
        if (this.state.showHideApp === true) {
            output = <CounterApp />;
        }
        return (
            <div className="container">
                <h1 className='alert alert-danger'>Counter Application - In Index</h1>


                <button className='btn btn-primary'
                    onClick={() => {
                        this.setState({ showHideApp: !this.state.showHideApp })
                    }}
                >Toggle Title</button>

                {output}
            </div>
        );
    }
}

export default App;