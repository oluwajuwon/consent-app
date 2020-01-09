import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckboxGroup from '../../components/CheckboxGroup';

import { useStyles } from './style';
import { consentOptions, consentOptionsState } from './consentOptions';

const GiveConsent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [checkState, setCheckState] = React.useState(consentOptionsState);
  const classes = useStyles();

  useEffect(() => { 
    handleButtonState();
   }, [checkState])

  const handleButtonState = () => {
    if (Object.values(checkState).includes(true)) {
      return setIsChecked(true);
    }
    setIsChecked(false);
  };

  const handleCheckChange = name => async (event) => {
    event.persist();
    await setCheckState({ ...checkState, [name]: event.target.checked });
    
    if(event.target.checked === true) {
      return addSelectedItem(event.target);;
    }
    removeSelectedItem(event.target);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handleSubmit = () => {
    console.log(selectedItems);
  }

  const addSelectedItem = item => {
    if((selectedItems.indexOf(item.name) === -1) === true) {
      return setSelectedItems([...selectedItems, item.name])
    }
  }

  const removeSelectedItem = item => {
    let tempArray = [...selectedItems]
    const itemIndex = tempArray.indexOf(item.name)

    if (itemIndex !== -1) {
      tempArray.splice(itemIndex, 1);
      return setSelectedItems(tempArray);
    }
  }

  return (
    <div className={classes.main}>
      <Grid container spacing={3}>
        <Grid container item xs={6} spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="user-name" placeholder="Name" value={name} variant="outlined" onChange={handleNameChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="user-email" placeholder="Email" value={email} variant="outlined" onChange={handleEmailChange} />
          </Grid>
          <Grid item xs={12} sm={12}>
          <CheckboxGroup checkItems={consentOptions} handleChange={handleCheckChange} checked={checkState} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" color="primary" disableElevation disabled={!isChecked} onClick={handleSubmit}>
              Give consent
          </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GiveConsent;
