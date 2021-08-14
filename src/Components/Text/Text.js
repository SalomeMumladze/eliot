import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Text = (props) => {
  const { children,
    color,
    fontSize,
    fontSizeMd,
    lineHeight,
    lineHeightMd,
    fontWeight,
    textAlign,
    ...rest } = props;

  const classes = useStyles({
    color: color,
    fontSize: fontSize,
    fontSizeMd: fontSizeMd,
    lineHeight: lineHeight,
    lineHeightMd: lineHeightMd,
    fontWeight: fontWeight,
    textAlign: textAlign,
  });
  return (
    <Typography className={classes.root} {...rest}>
      {children}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: (props) => theme.colors[props.color || 'black'],
    fontSize: (props) => props.fontSize || '14px',
    lineHeight: (props) => props.lineHeight || '14px',
    fontWeight: (props) => props.fontWeight || '400',
    textAlign: props => props.textAlign || 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: (props) => props.fontSizeMd,
      lineHeight: (props) => props.lineHeightMd,
    },
  },
}));

export default Text;