import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

import { productActions } from '../../actions'
import ProductEditForm from './ProductEditForm'

class ProductEdit extends Component{
    constructor(props){
        super(props)
        this.state = {
            product: this.props.product,
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
    //   event.preventDefault();
    //   console.log(this.state.product)
    //   this.props.actions.createProduct(this.state.product).then(response=>{
    //     // console.log(response)
    //     this.setState({product:{name:'',description: '', price: ''}});
    //   });
      
    }

    render() {
        
      const product = this.state.product;
      console.log(product)
        return (
            <div>
              <h3>New Product</h3>
              <ProductEditForm 
                product={product} 
                onSave={this.handleSave}
                onChange={this.handleChange}
                callbackDefault={this.props.callbackDefault}
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductEdit);