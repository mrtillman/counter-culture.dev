import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, value, placeholder, onChange }) => (
  <div>
    <label htmlFor={name}>
      {label}: &nbsp;
    </label>
    <input 
      type="text"
      placeholder={placeholder}
      name={name}
      value={value} 
      onChange={onChange}/>
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
};

export default TextInput;