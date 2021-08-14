import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/hidden';
import ImageSliderArrows from './ImageSliderArrows';
import ImageSliderSlides from './ImageSliderSlides';
import ImageSliderDots from './ImageSliderDots';
import ImageSliderContent from './ImageSliderContent/';
import IconButton from 'Components/Buttons/IconButton';
import Box from '@material-ui/core/Box';

const ImageSlider = (props) => {
  const { handleScroll } = props;
  const classes = useStyles();
  const [curr, setCurr] = useState(0)

  const toRight = () => {
    if (curr === -1 * (slides.length - 1)) {
      setCurr(0);
      return;
    };

    setCurr(curr - 1);
  }

  const toLeft = () => {
    if (curr === 0) {
      setCurr(-1 * (slides.length - 1));
      return;
    }

    setCurr(curr + 1);
  }

  const setImage = (value) => {
    setCurr(value)
  }

  return (
    <section>
      <div className={classes.slider}>
        <ImageSliderSlides slides={slides} curr={curr} />

        <Hidden smDown>
          <ImageSliderDots setImage={setImage} slides={slides} curr={curr} />
        </Hidden>

        <ImageSliderArrows toLeft={toLeft} toRight={toRight} />

        <ImageSliderContent />

        <Box position='absolute' bottom='20px' left='20px'>
          <IconButton onClick={handleScroll} width='60px' background='transparent' icon='/icons/scroll.svg' />
        </Box>
      </div>
    </section>
  );
}

const slides = [
  "/images/bg.png",
  "/images/test2.png",
  "/images/bg.png",

]


const useStyles = makeStyles((theme) => ({
  slider: {
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
}));

export default ImageSlider;
