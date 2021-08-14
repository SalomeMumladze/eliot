import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageSliderContentText from './ImageSliderContentText';
import ImageSliderContentButtons from './ImageSliderContentButtons';

const ImageSliderContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <ImageSliderContentText />

      <ImageSliderContentButtons />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '770px',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      width: '570px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

export default ImageSliderContent;
