import React, { Component } from 'react'

const InputField = ({name, value, type, placeholder, onChange, onSave}) => {
    let wrapperClass = 'form-group';
      
    return (
      <div className={wrapperClass}>
        <div className="field">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
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
  
  export default InputField;