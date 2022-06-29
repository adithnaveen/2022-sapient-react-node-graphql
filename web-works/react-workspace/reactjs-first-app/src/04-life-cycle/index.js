import React, { Component } from 'react'
import CounterApp from './CounterApp';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


class App extends Component {
    state = {
        showHideApp: true,
        title: "Hello World"
    }
    render() {

        let output = null;
        if (this.state.showHideApp === true) {
            output = <CounterApp title={this.state.title} />;
        }

        return (
            <div className="container">
                <h1 className='alert alert-danger'>Counter Application - In Index</h1>


                <button className='btn btn-primary'
                    onClick={() => {
                        this.setState({ showHideApp: !this.state.showHideApp })
                    }}
                >Show/Hide Component</button>



                <button className='btn btn-secondary'
                    onClick={() => {
                        if (this.state.title === 'Hello World') {
                            this.setState({ title: "React World" });
                        } else {
                            this.setState({ title: "Hello World" });
                        }
                    }}
                >Toggle Title</button>




                {output}
            </div>
        );
    }
}

export default App;