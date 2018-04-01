import React, { Component } from 'react'

const ProductForm = ({name, onChange, onSave, value, placeholder}) => {
    let wrapperClass = 'form-group';
      
    return (
      <div className={wrapperClass}>
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
            <input type="submit" onClick={onSave} value="Save" />
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