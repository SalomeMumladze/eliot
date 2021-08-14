import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CustomizedCardTitle = (props) => {
  const classes = useStyles();
  const { name, position } = props;

  return (
    <CardContent className={classes.content}>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="body2" component="p">
        {position}
      </Typography>
    </CardContent>
  );

}

const useStyles = makeStyles((theme) => ({
  content: {
    color: '#fff',
    textAlign: 'center',
    padding: 30,
    paddingBottom: 0,
    '& h2': {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '30px',
    },
    '& p': {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
}));

export default CustomizedCardTitle;
