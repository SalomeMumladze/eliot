import React from 'react';
import Grid from '@material-ui/core/Grid';
import BlockButton from 'Components/Buttons/BlockButton';
import Name from './Forms/Name';
import Email from './Forms/Email';
import Number from './Forms/Number';
import Subject from './Forms/Subject';
import Message from './Forms/Message';

const ContactForm = (props) => {
  const { disabled } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Name disabled={disabled} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Email disabled={disabled} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Number disabled={disabled} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Subject disabled={disabled} />
      </Grid>
      <Grid item xs={12}>
        <Message disabled={disabled} />
      </Grid>
      <Grid item xs={12}>
        <BlockButton
          disabled={disabled}
          background='blue'>
          Send Message
        </BlockButton>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
