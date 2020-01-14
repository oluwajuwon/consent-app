import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './style';
import { Grid, Button } from '@material-ui/core';

const LandingPage = (props) => {
  const classes = useStyles();

  const handleProceed = () => {
    props.history.push('/give-consent');
  }

  return (
    <div>
    <Typography className={classes.heading} variant="h5" align="left">Welcome</Typography>
    <Grid container spacing={0}>
      <Grid item xs={12} className={classes.welcome}>
      <Typography align="left">
        Welcome to the demo consent app, where users can decide what kind of data they wish to give to a platform
      </Typography>
      </Grid>
      <Grid item xs={12} className={classes.welcome}>
        <Button variant="contained" type="submit" className={classes.btn} disableElevation onClick={handleProceed}>
          Proceed
        </Button>
      </Grid>
      
    </Grid>
    
    </div>
  )
}

export default LandingPage;
