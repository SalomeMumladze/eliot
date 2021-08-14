import React from 'react';
import TextField from 'Components/TextField';

const Subject = (props) => {
  const { disabled } = props;

  return (
    <TextField
      disabled={disabled}
      placeholder='Your Subject'
    />
  );
}



export default Subject;
