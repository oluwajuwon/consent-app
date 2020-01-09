import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  form: {
    marginTop: 20
  },
  main: {
    flexGrow: 1,
    textAlign: 'left'
  },
  btn: {
    backgroundColor: '#2fabd5',
    color: 'white',
    "&:hover, &:focus": {
      backgroundColor: '#2fabd5'
    }
  }
}));
