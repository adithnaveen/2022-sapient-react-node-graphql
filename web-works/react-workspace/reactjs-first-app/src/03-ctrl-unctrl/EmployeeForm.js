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
        },
        errorMessages: ""
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
                if (!value || value.length === 0) {
                    formError.contact = "Contact Required"
                } else if (!value.match(/\d{10,12}/)) {
                    formError.contact = "Conact should be between 10 and 12 char"
                } else {
                    formError.contact = '';
                }
                break;

            default:
                break;
        }
        // re-render 
        this.setState({ [name]: value, formError })
    }

    submitHandler = (evt) => {
        console.log("Form Submitted");
        evt.preventDefault();
        let { formError } = this.state;
        if (this.validateForm(formError)) {
            alert("Form Submitted...");
        } else {
            let errorMessages = Object.values(formError).map((err, idx) => err.length === 0 ? null : <li key={idx}>{err}</li>)
            this.setState({ errorMessages });
        }
    }

    validateForm = (formError) => {
        let valid = true;
        Object.values(formError).forEach((err) => valid = valid && err.length === 0)
        return valid;
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
                        <ul>
                            {this.state.errorMessages}
                        </ul>
                        <h2>Current State values</h2>
                        <pre>{JSON.stringify(this.state, null, 3)}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;