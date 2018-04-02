import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

import { productActions } from '../../actions'
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
      this.props.actions.createProduct(this.state.product).then(response=>{
        console.log(response)
      });
      
    }

    render() {
        return (
          <div>
            <h3>New Product</h3>
            <ProductForm 
              product={this.state.product} 
              onSave={this.handleSave}
              onChange={this.handleChange}
            />
          </div>
        );
      }
}

function mapStateToProps(state) {
  return {
    product: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCreate);