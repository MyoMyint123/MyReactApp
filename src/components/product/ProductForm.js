import React, { Component } from 'react'
import InputField from './InputField'

const ProductForm = ({product, onChange, onSave}) => {
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

          <input type="submit" value="Save" onClick={onSave} />
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
  
  export default ProductForm;