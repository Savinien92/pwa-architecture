import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Hidden from 'material-ui/Hidden'
import Button from 'material-ui/Button'
import Menu from 'material-ui/Menu/Menu'
import MenuItem from 'material-ui/Menu/MenuItem'

import MenuCust from './Menu'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh'
  },
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
    [theme.breakpoints.up('xs')]: {
      marginTop: '56px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '64px',
    },
  },
  flex: {
    flex: 1,
  },
})

class ResponsiveDrawer extends React.Component {
  
  state = {
    mobileOpen: false,
    anchorEl: null,
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    let { classes, theme, children, title, isAuthenticated, user } = this.props
    let { anchorEl } = this.state

    let drawer = (
      <MenuCust
        isAuthenticated={isAuthenticated}
        handleDrawerToggle={this.handleDrawerToggle}
        userRoles={user.roles}
      />
    )

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap className={classes.flex}>
              {title}
            </Typography>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <NavLink
                to='/signin'
                onClick={this.handleClose}
              >
                <MenuItem>Sign in</MenuItem>
              </NavLink>
            </Menu>
            <Button
              color="inherit"
              onClick={this.handleClick}
            >
              {`${user.displayName !== undefined ? user.displayName : ''}`}
            </Button>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          {children}
        </main>
      </div>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)