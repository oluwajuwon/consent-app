import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useStyles } from './style';

const CheckboxGroup = ({ checkItems, handleChange, checked }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {checkItems.map(item => (
            <FormControlLabel
              key={item.value}
              control={
                <Checkbox
                  checked={checked[item.value]}
                  onChange={handleChange(item.value)}
                  value={item.value || ''}
                />}
              label={item.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default CheckboxGroup;
