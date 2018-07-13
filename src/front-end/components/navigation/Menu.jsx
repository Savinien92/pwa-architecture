import React from 'react'
import { NavLink } from 'react-router-dom'

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import Home from '@material-ui/icons/Home'
import Lock from '@material-ui/icons/Lock'
import GroupWork from '@material-ui/icons/GroupWork'

export class MenuCust extends React.PureComponent {
  render() {
    let { handleDrawerToggle, isAuthenticated, userRoles } = this.props
    let isAuthMenu = null,
        isNotAuth = null

    if(isAuthenticated) {
      isAuthMenu = (
        <div>
          <NavLink
            to='/teams'
            onClick={handleDrawerToggle}
          >
            <ListItem button variant="raised">
              <ListItemIcon>
                <GroupWork />
              </ListItemIcon>
              <ListItemText primary="Teams" />
            </ListItem>
          </NavLink>
        </div>
      )
    }
    if(!isAuthenticated) {
      isNotAuth = (
        <NavLink
          to='/signin'
          onClick={handleDrawerToggle}
        >
          <ListItem button>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary="Sign in" />
          </ListItem>
        </NavLink>
      )
    }
    return (
      <div>
        <List component="nav">
        <NavLink
          to='/'
          onClick={handleDrawerToggle}
        >
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>

        {isAuthMenu}
        {isNotAuth}
        
      </List>
      </div>
    );
  }
}

export default MenuCust