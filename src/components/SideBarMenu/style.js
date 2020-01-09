import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  drawer: {
    width: 40,
    flexShrink: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#555'
  },
  listItem: {
    borderBottomColor: '#efefef',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px'
  },
  toolbar: theme.mixins.toolbar,
}))