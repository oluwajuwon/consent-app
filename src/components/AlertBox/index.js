import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ({ showAlert, handleCloseAlert, type, message }) => {

  return (
    <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <MuiAlert onClose={handleCloseAlert} elevation={5} variant="filled" severity={type}>
          {message}
        </MuiAlert>
      </Snackbar>
  )
}

export default Alert;
