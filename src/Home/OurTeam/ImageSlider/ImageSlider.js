import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageSliderArrows from './ImageSliderArrows';
import ImageSliderSlides from './ImageSliderSlides';

const ImageSlider = (props) => {
  const classes = useStyles();
  const { slides } = props;
  const [curr, setCurr] = useState(0)

  let slidesToShow = 3;

  const toRight = () => {
    if (curr < -1 * (slides.length - slidesToShow - 1)) {
      return;
    }

    setCurr(curr - 1);
  }

  const toLeft = () => {
    if (curr === 0) {
      return;
    }

    setCurr(curr + 1);
  }

  return (
    <div className={classes.team}>


      <ImageSliderArrows toLeft={toLeft} toRight={toRight} />

      <div className={classes.slider}>
        <ImageSliderSlides slides={slides} curr={curr} />
      </div>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  slider: {
    width: '100%',
    // height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  team: {
    background: theme.colors.blue,
    padding: '30px 98px',
    height: 'fit-content',
    [theme.breakpoints.down('md')]: {
      padding: '30px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 25px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '30px 10px',
    },
  }
}));

export default ImageSlider;
