import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts, getProductDetail } from '../../services/api'
import { productActions } from '../../actions'

import Page from '../Page'

class Products extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        getProducts().then((data) => {
              console.log(data['records'])
              this.props.dispatch(productActions.loadProducts(data))
            });    

    }

    render(){
        const { products } = this.props;
        return(
            <Page>
                <div className="page-content">
                    Product Page
                    {products.map((product,index)=>(
<li key={index}>{product.name}</li>
                    ))
                }
                </div>
            </Page>
        )
    }
}

function mapStateToProps(state) {
    const { products } = state
   
    return {
        products
    }
  }
   
export default connect(mapStateToProps)(Products)