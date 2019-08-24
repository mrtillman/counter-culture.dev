import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxGroup = ({ name, label, options, onChange }) => {

  const renderCheckbox = (option) => (
    <p key={option.id}>
      <label htmlFor={option.id}>
        <input 
          id={option.id}
          type="checkbox"
          name={name}
          checked={option.checked}
          value={option.id}
          onChange={onChange}
        />
        {option.label}
      </label>
    </p>
  );

  return (
    <div>
      <label>
        {label}:
        {options.map(renderCheckbox)}
      </label>
    </div>
  );
}

CheckBoxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};

export default CheckBoxGroup;