import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import HeaderNav from './HeaderNav';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import ScrollTop from './HeaderScrollTop';

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleNavMenu = () => {
    setOpen(!open);
  }

  return (
    <header>
      <AppBar position='absolute' className={classes.appbar} >
        <Toolbar
          id="back-to-top-anchor"
          className={classes.toolbar}
          disableGutters={true} >
          <Hidden smUp>
            <IconButton onClick={handleNavMenu} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>

          <img className={classes.logo} src='/images/logo.svg' alt='logo' />

          <Hidden xsDown={open}>
            <HeaderNav />
          </Hidden>

        </Toolbar>
      </AppBar>

      <ScrollTop />
    </header>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    minHeight: 100,
    background: 'transparent',
    boxShadow: 'none',
    padding: '0 98px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '0 60px',
      minHeight: 60,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
    },
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'unset',
    },
  },

}));

export default Header;
