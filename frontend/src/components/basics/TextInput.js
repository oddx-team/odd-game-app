import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (props.onSubmit) props.onSubmit(value);
    setValue('');
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{width: '100%'}}>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        style={{ fontSize: '100%', width: '100%' }}
        placeholder={props.placeholder}
      />
      <input type='submit' value='Submit' style={{ display: 'none' }} />
    </form>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default TextInput;