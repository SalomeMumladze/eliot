import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const BlockButton = (props) => {
  const classes = useStyles({
    background: props.background,
    width: props.width,
    color: props.color,
    border: props.border,
    height: props.height,
  });
  const { children, ...rest } = props;

  return (
    <Button
      className={classes.button}
      classes={{ disabled: classes.disabled }}
      {...rest}>
      {children}
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    background: props => theme.colors[props.background || 'blue'],
    height: props => props.height || '60px',
    width: props => props.width || '100%',
    border: '1px solid transparent',
    borderColor: props => theme.colors[props.border],
    color: props => theme.colors[props.color || 'white'],
    '&:hover': {
      background: props => theme.colors[props.hover || props.background || 'blue'],
      opacity: .9,
    },
    '&$disabled': {
      color: (props) => theme.colors[props.color || 'white'],
      opacity: '.3'
    }
  },
  disabled: {
    color: (props) => theme.colors[props.color || 'white'],
  }
}));

export default BlockButton;
