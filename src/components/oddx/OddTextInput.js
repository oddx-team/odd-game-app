import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OddTextInput = props => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ fontSize: '100%', width: '100%' }}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
      <input type="submit" value="Submit" style={{ display: 'none' }} disabled={props.disabled} />
    </form>
  );
};

OddTextInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

export default OddTextInput;
