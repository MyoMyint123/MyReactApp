import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import InputField from './InputField'


const ProductEditForm = ({product, onChange, onSave, callbackDefault }) => {
    let wrapperClass = 'form-group';
      
    return (
      <div className={wrapperClass}>
        <div className="field">

          <InputField
            type = "text"
            name = "name"
            value = {product.name}
            placeholder = "Enter a name"
            onChange={onChange} />

          <InputField
            type="text"
            name="description"
            value={product.description}
            placeholder="Enter a description"
            onChange={onChange} />

          <InputField
            type="text"
            name="price"
            value={product.price}
            placeholder="Enter a price"
            onChange={onChange} />

            <input className="btn btn-success btn-sm" type="submit" value="Save" onClick={onSave} />&nbsp;&nbsp;
            <input className="btn btn-primary btn-sm" type="button" value="Back" onClick={callbackDefault} />
        </div>
      </div>
    );
  };
  
//   TextInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     placeholder: PropTypes.string,
//     value: PropTypes.string,
//     error: PropTypes.string
//   };
  
  export default ProductEditForm;