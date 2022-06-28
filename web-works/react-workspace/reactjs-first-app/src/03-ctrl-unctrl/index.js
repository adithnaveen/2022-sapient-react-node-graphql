import React, { Component } from 'react';
import ProductForm from './ProductForm';


class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Un-controlled Component</h1>
                <div className="row">
                    <div className="col"><ProductForm /> </div>
                    <div className="col">Other Works</div>
                </div>

            </div >
        );
    }
}

export default App;