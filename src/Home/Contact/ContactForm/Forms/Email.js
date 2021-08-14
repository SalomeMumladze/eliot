import React from 'react';
import TextField from 'Components/TextField';

const Email = (props) => {
  const { disabled } = props;
  return (
    <TextField
      disabled={disabled}
      placeholder='Your Email'
    />
  );
}

export default Email;
