import React from 'react';
import Box from '@material-ui/core/Box';
import SwitchButton from './SwitchButton';

const Contact = (props) => {
  const { handleClick, value } = props;

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <SwitchButton value='contact' onClick={handleClick} active={value} text='Contact Us' />
      <SwitchButton value='map' onClick={handleClick} active={value} text='Map' />
    </Box>
  );
}


export default Contact;
