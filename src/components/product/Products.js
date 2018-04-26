import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductDetail } from '../../services/api'
import { productActions } from '../../actions'

import Page from '../Page'
import ProductTable from './ProductTable'
import ProductDetail from './ProductDetail'
import ProductCreate from './ProductCreate'
import ProductEdit from './ProductEdit'


class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            show: true,
            detail: false, 
            create: false,
            edit: false,
            detailData: null
        };
    }

    componentDidMount(){
        this.props.actions.loadProducts()

        this.setState({create: false, show: true, detail: false, edit: false});
    }

    handleDetail = (idSlug)=>{
        getProductDetail(idSlug).then((data) => {
            // console.log(data);
            this.setState({detailData: data, show: false, create: false, detail: true, edit: false});
        });        
    }
    handleEdit = (idSlug)=>{
        getProductDetail(idSlug).then((data) => {
            // console.log(data);
            this.setState({detailData: data, show: false, detail: false, create: false, edit: true});
        });        
        
    }

    handleNewform = ()=>{
        this.setState({show: false, detail: false, create: true, edit: false});
    }

    handleDefault = ()=>{
        this.componentDidMount();
    }

    handleDelete = (idSlug)=>{
        console.log(idSlug)
    }

    render(){
        const { show, detail, create, edit, detailData} = this.state;
        // console.log(detailData);
        const { products } = this.props;
        return(
            <Page>
                {
                    show ?
                        <div className="page-content">
                            <ProductTable products={products} callbackEdit={(idSlug)=>this.handleEdit(idSlug)} callbackDetail={(idSlug)=>this.handleDetail(idSlug)} callbackDelete={(idSlug)=>this.handleDelete(idSlug)} />
                            <button className="btn btn-info btn-sm" onClick={()=>this.handleNewform()}>New Product</button>
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
                                <ProductCreate callbackDefault={()=>this.handleDefault()} />
                            </div>
                           :
                            null
                }
                {
                    edit ?
                            <div className="page-content">
                                <ProductEdit product={detailData} callbackDefault={()=>this.handleDefault()} />
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

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(productActions, dispatch)
    };
  }
   
export default connect(mapStateToProps, mapDispatchToProps)(Products)