import React from 'react';
import { makeStyles } from '@material-ui/styles';
import IconButton from 'Components/Buttons/IconButton';

const ImageSliderArrows = (props) => {
  const classes = useStyles();
  const { toLeft, toRight } = props;


  return (
    <span className={classes.arrows}>
      <span className={classes.arrow}>
        <IconButton
          width='100px'
          widthMd='60px'
          hover='white'
          onClick={toLeft}
          svgHover='blue'
          svg={arrow} />
      </span>
      <span className={classes.arrow}>
        <IconButton
          width='100px'
          widthMd='60px'
          hover='white'
          onClick={toRight}
          transform='rotate(180deg)'
          svgHover='blue'
          svg={arrow} />
      </span>
    </span>
  );
}

const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <g id="left" transform="translate(406 125) rotate(90)">
    <rect id="Rectangle_6" data-name="Rectangle 6" width="32" height="32" transform="translate(-125 374)" fill="none" />
    <g id="down-chevron" transform="translate(-122.356 381.933)">
      <g id="Group_4" data-name="Group 4" transform="translate(0 0)">
        <path id="Path_2" data-name="Path 2" d="M23.324,48.907l-10.1,10.1-10.1-10.1L0,52.025,13.221,65.246,26.442,52.025Z" transform="translate(0 -48.907)" fill="#fff" />
      </g>
    </g>
  </g>
</svg>


const useStyles = makeStyles((theme) => ({
  arrows: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      right: 10,
      bottom: 10,
    }
  },
  arrow: {
    margin: 15,
  }
}));

export default ImageSliderArrows;
