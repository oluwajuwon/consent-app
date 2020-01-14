import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: 20
  },
  welcome: {
    textAlign: 'left',
    paddingTop: 15
  },
  btn: {
    backgroundColor: '#2fabd5',
    color: 'white',
    "&:hover, &:focus": {
      backgroundColor: '#2fabd5'
    }
  }
}));