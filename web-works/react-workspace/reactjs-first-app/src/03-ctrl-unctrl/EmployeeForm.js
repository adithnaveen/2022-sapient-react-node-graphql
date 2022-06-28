import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

class EmployeeForm extends Component {
    state = {
        name: "",
        email: "",
        contact: "",
        pic: "",
        formError: {
            name: "Name Required",
            email: "Email Required",
            contact: "Contact Required"
        }
    }

    tfHandler = (evt) => {
        let { name, value } = evt.target;
        let { formError } = this.state;
        switch (name) {
            case 'name':
                if (!value || value.length === 0) {
                    formError.name = 'Name Required';
                } else if (value.length < 3 || value.length > 20) {
                    formError.name = 'Name must be between 3 and 20 chars'
                } else {
                    formError.name = '';
                }
                break;

            case 'email':
                if (!value || value.length === 0) {
                    formError.email = 'Email Required'
                } else if (!value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
                    formError.email = "Email Format invalid"
                } else {
                    formError.email = '';
                }
                break;

            case 'contact':
                break;

            default:
                break;
        }
        // re-render 
        this.setState({ [name]: value, formError })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">


                        <form className="form-group" onSubmit={this.submitHandler}>

                            <div className="form-group row">
                                <label htmlFor="name" className='control-label col-md-4'>Employee Name</label>
                                <div className="col-md-8">
                                    <input
                                        onChange={this.tfHandler}
                                        value={this.state.name}
                                        type="text" name="name" id="name" className="form-control" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="email" className='control-label col-md-4'>Employee Email</label>
                                <div className="col-md-8">
                                    <input type="text"
                                        onChange={this.tfHandler}
                                        value={this.state.email}
                                        name="email" id="email" className="form-control" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="contact" className='control-label col-md-4'>Employee Contact</label>
                                <div className="col-md-8">
                                    <input type="text"
                                        onChange={this.tfHandler}
                                        value={this.state.contact}
                                        name="contact" id="contact" className="form-control" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="pic" className='control-label col-md-4'>Employee Picture</label>
                                <div className="col-md-8">
                                    <input type="text"
                                        onChange={this.tfHandler}
                                        value={this.state.pic}
                                        name="pic" id="pic" className="form-control" />
                                </div>
                            </div>


                            <button className='btn btn-primary'>Save Employee</button>
                        </form>
                    </div>
                    <div className="col">
                        <h2>Current State values</h2>
                        <pre>{JSON.stringify(this.state, null, 3)}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;