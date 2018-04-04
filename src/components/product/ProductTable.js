import React, { Component } from 'react'

class ProductTable extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { products, callbackDetail,callbackEdit } = this.props;
        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th> 
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm" onClick={() => callbackDetail(product.id) }>Detail</button>&nbsp;
                                        <button className="btn btn-primary btn-sm" onClick={() => callbackEdit(product.id) }>Edit</button>
                                    </td>
                                </tr>                                
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default ProductTable;