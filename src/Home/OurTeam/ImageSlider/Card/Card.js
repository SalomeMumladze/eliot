import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from './CardContent';
import CardActionButtons from './CardActionButtons';
import CardImage from './CardImage';

const CustomizedCard = (props) => {
  const classes = useStyles();
  const { slide, curr } = props;

  return (
    <div
      style={{ transform: `translateX(${curr}00%)` }}
      className={classes.slide}>
      <Card className={classes.card}>
        <CardImage img={slide.img} />

        <CardContent name={slide.name} position={slide.position} />

        <CardActionButtons />

      </Card>
    </div>
  );

}

const useStyles = makeStyles((theme) => ({
  slide: {
    padding: 15,
    transition: '.5s',
    minWidth: '33.33%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  card: {
    borderRadius: 10,
    background: 'transparent',
    boxShadow: 'none',
    position: 'relative',
    "&:hover": {
      background: 'transparent',
    },
    '& main': {
      display: 'none',
    },
    '&:hover main': {
      display: 'unset'
    },
    [theme.breakpoints.down('sm')]: {
      '& main': {
        display: 'unset',
      },
    }
  },
  shadow: {
    background: '#0652A8'
  }
}));

export default CustomizedCard;
