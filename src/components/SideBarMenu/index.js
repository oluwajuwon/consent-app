import React from 'react';
import { NavLink } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { navMenuItems } from './menuItems';
import { useStyles } from './style';

const SideBarMenu = () => {
  const classes = useStyles();
  
  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <List>
        {navMenuItems.map(item => (
            <ListItem button key={item.name} className={classes.listItem}>
              <NavLink to={item.path} className={classes.navLink}>
                <ListItemText primary={item.name} />
              </NavLink>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  )
}

export default SideBarMenu;
