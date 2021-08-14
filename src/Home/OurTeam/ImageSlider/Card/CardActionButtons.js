import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from 'Components/Buttons/IconButton';

const CustomizedCardActionButtons = () => {
  const classes = useStyles();

  return (
    <main>
      <CardActions component='main' selected className={classes.actionArea}>
        <IconButton
          background='transparent'
          icon='/icons/socialMedia/facebookBlack.svg' />
        <IconButton
          background='transparent'
          icon='/icons/socialMedia/linkedinBlack.svg' />
        <IconButton
          background='transparent'
          icon='/icons/socialMedia/twitterBlack.svg' />
      </CardActions>
    </main>
  );

}

const useStyles = makeStyles((theme) => ({
  actionArea: {
    background: 'rgba(255,255,255,.8)',
    borderRadius: 10,
    height: 68,
    width: '80%',
    margin: 'auto',
    position: 'absolute',
    bottom: '85px',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 45px',
    [theme.breakpoints.down('lg')]: {
      padding: '0 30px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 15px',
    },
    [theme.breakpoints.down('xs')]: {
      height: 55,
    },
  }
}));

export default CustomizedCardActionButtons;
