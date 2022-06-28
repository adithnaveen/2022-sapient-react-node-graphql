// to show working of un-controlled compnents/forms
import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

class ProductForm extends Component {

    render() {
        return (
            <div className="container">
                <h3>Product Form</h3>
                <form className='form' onSubmit={this.addProduct}>

                    <div className="form-group row">
                        <label htmlFor="name" className="control-label col-md-4">Product Name</label>
                        <div className="col-md-8">
                            <input type="text" name="" id="name" className="form-control" ref="name" />
                        </div>
                    </div>


                </form>
            </div>
        );
    }
}

export default ProductForm;