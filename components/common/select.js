import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ name, label, value, options, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}: &nbsp;
      </label>
      <select 
        type="text"
        name={name}
        value={value}
        onChange={onChange}>
        {options.map(option => {
          return <option 
                  key={option.value}
                  value={option.value}>
                  {option.name}
                 </option>;
        })}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default SelectInput;