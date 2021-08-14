import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Switch from './Switch';
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  const [value, setValue] = useState('contact')

  const handleClick = (val) => {
    setValue(val);
  }
  return (
    <section>
      <Box p={{ xs: '0 15px', sm: '0 40px', md: '0 98px' }} mt='130px' mb='100px' >
        <Switch handleClick={handleClick} value={value} />
        <Box mt='80px'>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <ContactForm disabled={value !== 'contact' ? true : false} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Map disabled={value !== 'map' ? true : false} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
}

export default Contact;
