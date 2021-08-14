import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const InputField = (props) => {
  const { options, handleChange, value, InputProps, ...rest } = props
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      value={value}
      variant='outlined'
      onChange={handleChange}
      InputProps={{
        classes: {
          adornedStart: classes.adornedStart,
        },
        ...InputProps
      }}
      className={classes.textfield}
      {...rest}
    >
      {Array.isArray(options) && options.length > 0 ? options.map((option, index) => {

        return (
          <MenuItem key={index} value={option.value || option.id}>
            {option.label}
          </MenuItem>
        )
      }) : null}
    </TextField>
  );
}

const useStyles = makeStyles((theme) => ({
  textfield: {
    minWidth: 100,
    '& textarea': {
      minHeight: 180,
    }
  },
  adornedStart: {
    paddingLeft: 0,
  }
}));


export default InputField;