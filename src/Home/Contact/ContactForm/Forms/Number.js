import React from 'react';
import TextField from 'Components/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';

const Number = (props) => {
  const { disabled } = props;

  return (
    <TextField
      disabled={disabled}
      placeholder='Your Number'
      InputProps={{
        startAdornment: (
          <InputAdornment style={{ paddingLeft: 0 }} position="start">
            <TextField
              disabled={disabled}
              value='geo'
              options={numbers}
              select />
          </InputAdornment>
        ),
      }}
    />
  );
}

const Zone = ({ text }) => {
  return (
    <Box display='flex'>
      <Box mr='3px'>
        <img src="/flags/georgia.svg" alt="" />
      </Box>
      {text}
    </Box>
  );
}

const numbers = [
  { value: 'geo', label: <Zone text='+995' /> },
  { value: 'zim', label: <Zone text='+994' /> },
]




export default Number;
