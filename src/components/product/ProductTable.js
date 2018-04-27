import React, { Component } from 'react'

class ProductTable extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { products, callbackDetail, callbackEdit, callbackDelete } = this.props;
        console.log(products['records'])
        const local_products = products['records']
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
                        

                        local_products ?
                                
                        local_products.map((product,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <button className="btn btn-info btn-sm" onClick={() => callbackDetail(product.id) }>Detail</button>&nbsp;
                                                    <button className="btn btn-primary btn-sm" onClick={() => callbackEdit(product.id) }>Edit</button>&nbsp;
                                                    <button className="btn btn-danger btn-sm" onClick={(event) => callbackDelete(event,product.id) }>Dele</button>
                                                </td>
                                            </tr>                                
                                        )
                                    })
                                
                                 :  null 
                    }
                   
                </tbody>
            </table>
        )
    }
}

export default ProductTable;