import React from 'react';
import { makeStyles } from '@material-ui/styles';

const ImageSliderSlides = (props) => {
  const classes = useStyles();
  const { slides, curr } = props;

  if (Array.isArray(slides) && slides.length > 0) return (
    slides.map((slide, i) => (
      <img
        src={slide}
        key={i}
        className={classes.slide}
        alt="slide"
        style={{ transform: `translateX(${curr}00%)` }} />
    ))
  );

  return null
}

const useStyles = makeStyles((theme) => ({
  slide: {
    transition: '.5s',
    minWidth: '100%',
  },
}));

export default ImageSliderSlides;
