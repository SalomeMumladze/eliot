import React from 'react';
import TextField from 'Components/TextField';

const Message = (props) => {
  const { disabled } = props;

  return (
    <TextField
      disabled={disabled}
      multiline
      placeholder='Your Message'
    />
  );
}

export default Message;
