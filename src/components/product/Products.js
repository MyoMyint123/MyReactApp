import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts, getProductDetail } from '../../services/api'
import { productActions } from '../../actions'

import Page from '../Page'
import ProductTable from './ProductTable'
import ProductDetail from './ProductDetail'
import ProductCreate from './ProductCreate'


class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            show: true,
            detail: false, 
            create: false,
            detailData: null
        };
    }

    componentDidMount(){
        getProducts().then((data) => {
            //   console.log(data['records'])
              this.props.dispatch(productActions.loadProducts(data['records']))
            });    

    }

    handleDetail = (idSlug)=>{
        getProductDetail(idSlug).then((data) => {
            // console.log(data);
            this.setState({detailData: data, show: false, detail: true});
        });        
    }

    handleNewform = ()=>{
        this.setState({show: false, detail: false, create: true});
    }

    handleDefault = ()=>{
        this.setState({show: true, detail: false});
    }

    render(){
        const { show, detail, create, detailData} = this.state;
        // console.log(detailData);
        const { products } = this.props;
        return(
            <Page>
                {
                    show ?
                        <div className="page-content">
                            <ProductTable products={products} callbackDetail={(idSlug)=>this.handleDetail(idSlug)} />
                            <button className="btn btn-info btn-sm" onClick={this.handleNewform}>New Product</button>
                        </div>
                        :
                        null
                }
                {
                    detail ?
                            <div className="page-content">
                                <ProductDetail product={detailData} callbackDefault={()=>this.handleDefault()} />
                            </div>
                           :
                            null
                }
                {
                    create ?
                            <div className="page-content">
                                <ProductCreate />
                            </div>
                           :
                            null
                }
                
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