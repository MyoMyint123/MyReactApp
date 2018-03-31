import React, { Component } from 'react'
import ProductForm from './ProductForm'

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

    handleSave =()=>{
        
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