import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckboxGroup from '../../components/CheckboxGroup';

import { useStyles } from './style';
import { consentOptions, consentOptionsState } from './consentOptions';

const GiveConsent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [checkState, setCheckState] = React.useState(consentOptionsState);
  const classes = useStyles();

  const handleCheckChange = name => event => {
    event.persist();
    setCheckState({ ...checkState, [name]: event.target.checked });
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
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
            <Button variant="contained" color="primary" disableElevation disabled={!checked}>
              Give consent
          </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GiveConsent;
