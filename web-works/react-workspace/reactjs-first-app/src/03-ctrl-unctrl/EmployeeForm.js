import React, { Component } from 'react';


class EmployeeForm extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">

                        <h3 className="alert alert-danger">Controlled Component</h3>

                        <form className="form-group" onSubmit={this.submitHandler}>

                            <div className="form-group row">
                                <label htmlFor="name" className='control-label col-md-4'>Employee Name</label>
                                <div className="col-md-8">
                                    <input type="text" name="name" id="name" className="form-control" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="email" className='control-label col-md-4'>Employee Email</label>
                                <div className="col-md-8">
                                    <input type="text" name="email" id="email" className="form-control" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="contact" className='control-label col-md-4'>Employee Contact</label>
                                <div className="col-md-8">
                                    <input type="text" name="contact" id="contact" className="form-control" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="picture" className='control-label col-md-4'>Employee Picture</label>
                                <div className="col-md-8">
                                    <input type="text" name="picture" id="picture" className="form-control" />
                                </div>
                            </div>


                            <button className='btn btn-primary'>Save Employee</button>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;