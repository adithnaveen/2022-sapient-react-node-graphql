// to show working of un-controlled compnents/forms
import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

class ProductForm extends Component {

    addProduct = (event) => {
        console.log("Product Form Submitted...");

        const name = this.refs.name.value;
        const price = this.refs.price.value;
        const description = this.refs.description.value;
        const pic = this.refs.pic.value;
        const p1 = { name, price, description, pic };

        console.log(p1);

        this.refs.name.value = "";
        this.refs.price.value = "";
        this.refs.description.value = "";
        this.refs.pic.value = "";

        event.preventDefault();
    }

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

                    <div className="form-group row">
                        <label htmlFor="price" className="control-label col-md-4">Product Price</label>
                        <div className="col-md-8">
                            <input type="text" name="" id="price" className="form-control" ref="price" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="description" className="control-label col-md-4">Product Description</label>
                        <div className="col-md-8">
                            <input type="text" name="" id="description" className="form-control" ref="description" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="pic" className="control-label col-md-4">Product Picture</label>
                        <div className="col-md-8">
                            <input type="text" name="" id="pic" className="form-control" ref="pic" />
                        </div>
                    </div>

                    <button className='btn btn-danger'>Save Product</button>

                </form>
            </div>
        );
    }
}

export default ProductForm;