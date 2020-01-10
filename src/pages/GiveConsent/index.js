import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CheckboxGroup from '../../components/CheckboxGroup';
import Alert from '../../components/AlertBox';

import { useStyles } from './style';
import { consentOptions, consentOptionsState } from './consentOptions';

import { giveConsent } from '../../store/modules/consent';

const GiveConsent = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [checkState, setCheckState] = React.useState(consentOptionsState);
  const classes = useStyles();

  useEffect(() => {
    handleButtonState();
  }, [checkState])

  useEffect(() => {
    const { consent } = props
    handleGiveConsentResponse(consent);
    
  }, [props.consent])

  const handleGiveConsentResponse = (consent) => {
      if(consent.success === true && name !== '') {
        setShowAlert(true);
        setAlertType('success');
        setAlertMessage('successfully given consent');
        setCheckState(consentOptionsState);
        setName('');
        setEmail('');
      }
  }

  const handleButtonState = () => {
    if (Object.values(checkState).includes(true)) {
      return setIsConsentChecked(true);
    }
    setIsConsentChecked(false);
  };

  const handleCheckChange = name => async (event) => {
    event.persist();
    await setCheckState({ ...checkState, [name]: event.target.checked });

    if (event.target.checked === true) {
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

  const handleSubmit = event => {
    event.preventDefault();

    if( name === '' || email === '') {
      setShowAlert(true);
      setAlertType('error');
      return setAlertMessage('please add name and email');
    }
    const userFeedback = {
      name, email, selectedItems
    }
    props.giveConsent(userFeedback);
  }

  const closeAlert = () => {
    setShowAlert(false);
  }

  const addSelectedItem = item => {
    if ((selectedItems.indexOf(item.name) === -1) === true) {
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
    {showAlert && <Alert showAlert={showAlert} handleCloseAlert={closeAlert} type={alertType} message={alertMessage} />}
    <Typography className={classes.heading} variant="h5" align="left">Give Consent</Typography>
      <Grid container spacing={0}>
      <form className={classes.form} autoComplete="off">
        <Grid container item xs={6} spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="user-name" placeholder="Name" value={name} variant="outlined" onChange={handleNameChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="user-email" placeholder="Email" type="email" value={email} variant="outlined" onChange={handleEmailChange} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormLabel>I agree to:</FormLabel>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxGroup checkItems={consentOptions} handleChange={handleCheckChange} checked={checkState} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" type="submit" className={classes.btn} disableElevation disabled={!isConsentChecked} onClick={handleSubmit}>
                Give consent
          </Button>
            </Grid>
        </Grid>
      </form>
        
      </Grid>
    </div>
  )
}

export const mapStateToProps = state => ({
  consent: state.consent
});

export const mapDispatchToProps = dispatch => ({
  giveConsent: userFeedback => dispatch(giveConsent(userFeedback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiveConsent);
