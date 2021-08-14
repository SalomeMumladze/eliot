import React from 'react';
import { makeStyles } from '@material-ui/styles';

const ImageSliderDots = (props) => {
  const classes = useStyles();
  const { curr, slides, setImage } = props;

  return (
    <div className={classes.dots}>
      {slides.map((slide, index) => (
        <Dot key={index} curr={curr} index={index} onClick={setImage} />
      ))}
    </div>
  );
}


const Dot = (props) => {
  const { curr, index, onClick } = props;
  const classes = useStyles();
  return (
    <div
      onClick={() => onClick(-1 * index)}
      className={classes.circle}
      style={(-1 * curr) === index ? { borderColor: '#fff' } : { borderColor: 'transparent' }}
    >
      <div className={classes.dot} />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  dots: {
    position: 'absolute',
    transform: 'translate(50%,-50%)',
    top: '50%',
    left: 40,
    [theme.breakpoints.down('sm')]: {
      top: '20%',
      display: 'flex',
      left: '50%',
      transform: 'translate(-50%,-50%)',

    }
  },
  circle: {
    borderRadius: '50%',
    padding: '3px',
    border: '1px solid',
    margin: '4px 0'
  },
  dot: {
    cursor: 'pointer',
    background: '#fff',
    borderRadius: '50%',
    width: 9,
    height: 9,
  }
}));

export default ImageSliderDots;
