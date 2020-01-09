import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  table: {
    minWidth: 500,
  },
  tableHeader: {
    backgroundColor: '#2fabd5',
  },
  tableHeaderTitle: {
    color: '#fff'
  }
}));
