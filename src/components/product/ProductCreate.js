import React, { Component } from 'react'
import ProductForm from './ProductForm'
import ProductApi from '../../services/api2'

class ProductCreate extends Component{
    constructor(props){
        super(props)
        this.state = {
            product: {name: '', description: '', price: ''},
            saving: false
          };
    }

    handleChange =(event)=>{
        const field = event.target.name;
        const product = this.state.product;
        product[field] = event.target.value;
        return this.setState({product});
    }

    handleSave =(event)=>{
      event.preventDefault();
        console.log(this.state.product);
      ProductApi.createProduct(this.state.product).then(response=>{
        // console.log(response);
      })
    }

    render() {
        return (
          <div>
            <h3>New Product</h3>
            <ProductForm 
              name="name"
              placeholder="Enter a name"
              value={this.state.product.name} 
              onSave={this.handleSave}
              onChange={this.handleChange}
            />
          </div>
        );
      }
}

export default ProductCreate;