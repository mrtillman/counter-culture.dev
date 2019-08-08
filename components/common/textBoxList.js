import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const TextBoxList = ({ 
  name, label, items, onChange, onAddNew }) => {

  const renderTextbox = item => (
    <p key={item.id}>
      <input
        id={item.id}
        name={name}
        type="text"
        value={item.value}
        onChange={onChange}
      />
    </p>
  );

  const addNew = () => {
    onAddNew({
      id: uuid(),
      value: '',
    })
  }

  return (
    <div>
      <p>{label}</p>
      {items.map(renderTextbox)}
      <p>
        <a href="#" onClick={addNew}>add new</a>
      </p>
    </div>
  );
}

TextBoxList.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  onAddNew: PropTypes.func.isRequired,
};

export default TextBoxList;