import React from 'react';
import TextField from 'Components/TextField';

const Name = (props) => {
  const { disabled } = props;

  return (
    <TextField
      disabled={disabled}
      placeholder='Your Name'
    />
  );
}

export default Name;
