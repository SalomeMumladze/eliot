import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Text from 'Components/Text';
import React from 'react';

const ContactForm = (props) => {
  const { disabled } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11912.126982118181!2d44.74179433730356!3d41.7198338177591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473252c8bb713%3A0x103ff719fff25b5c!2zQ2hhYnVhIEFtaXJlamliaSBId3ksIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1625855360200!5m2!1ska!2sge"
          width="100%"
          height="360"
          title='Google map'
          style={{
            width: '100%',
            border: '0',
            pointerEvents: disabled ? 'none' : 'unset',
            opacity: disabled ? .2 : 1,
          }}
          allowFullScreen="none"
          loading="lazy"
        ></iframe>
      </Grid>
      <Grid item xs={12}>
        <Box alignItems='center' display='flex' mt='45px'>
          <Text
            fontSize='20px'
            fontWeight='600'
            lineHeight='30px'
            textAlign='left'
            color='black'
            style={{
              opacity: disabled ? .5 : 1
            }}
          >
            contact@domain.com
          </Text>
          <Box ml='30px' width='100%' height='1px' borderBottom='1px solid #BDC3C7' />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
