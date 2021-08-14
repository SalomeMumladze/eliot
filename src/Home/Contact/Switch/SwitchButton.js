import React from 'react';
import Text from 'Components/Text';
import { makeStyles } from '@material-ui/styles';

const SwitchButton = (props) => {
  const { value, active, text, onClick } = props;
  const classes = useStyles();
  const activeStyle = {
    active: { borderBottom: '4px solid #1565C0' },
    inactive: { borderBottom: '1px solid #919191' },
  }
  return (
    <div
      className={classes.button}
      onClick={() => onClick(value)}
      style={value === active ? activeStyle.active : activeStyle.inactive}
    >
      <Text
        fontSize='32px'
        fontSizeMd='26px'
        fontWeight='500'
        lineHeight='48px'
        color={value === active ? 'blue' : null}
      >
        {text}
      </Text>
    </div >
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    width: '270px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    height: '60px',
  }
}));

export default SwitchButton;
