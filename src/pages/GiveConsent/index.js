import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useStyles } from './style';

const GiveConsent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

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
