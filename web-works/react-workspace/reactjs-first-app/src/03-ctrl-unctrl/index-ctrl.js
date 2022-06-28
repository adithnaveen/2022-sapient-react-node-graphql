import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';



class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Controlled Component</h1>
                <div className="row">
                    <div className="col"><EmployeeForm /> </div>
                    <div className="col">Other Works</div>
                </div>

            </div >
        );
    }
}

export default App;