import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FooterNavMenu from './FooterNavMenu';
import Text from 'Components/Text';
import FooterSocMedia from './FooterSocMedia';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer} >
      <Grid alignItems='center' justifyContent='center' spacing={1} container>
        <Grid xs={12} lg={4} item>
          <FooterNavMenu />
        </Grid>
        <Grid xs={12} lg={4} item>
          <Text
            fontSize='18px'
            lineHeight='24px'
            color='white'
            textAlign='center'
          >
            Copyright © Your Website 2020
          </Text>
        </Grid>
        <Grid xs={12} lg={4} item>
          <FooterSocMedia />
        </Grid>
      </Grid>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.colors.black,
    minHeight: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 98px',
    [theme.breakpoints.down('md')]: {
      padding: '20px 40px',

    }
  },
}));

export default Footer;
