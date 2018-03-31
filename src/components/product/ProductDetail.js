import React, { Component } from 'react'

const ProductDetail = (props) => (
    <div>
            <div>
                <ul>
                    <li>{props.product.name}</li>          
                    <li>{props.product.description}</li>  
                    <li>{props.product.price}</li>            
                </ul>
            </div>
            <div>
                <button className="btn btn-default" onClick={()=>props.callbackDefault()}>Back</button>
            </div>
        </div>
);

export default ProductDetail;