import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import Switch from 'material-ui/Switch';
// import { FormControlLabel, FormGroup } from 'material-ui/Form';
// import Menu, { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
// import MenuIcon from 'material-ui-icons/Menu';
// import AccountCircle from 'material-ui-icons/AccountCircle';
import NavItems from './NavItem';

const styles = {
  header: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr 100px 100px 100px',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
    width: 200,
  },
};

const NavItem = ({ title, path }) => (
  <NavLink exact to={path}>
    <Typography variant="title" color="inherit">
      {title}
    </Typography>
  </NavLink>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const Header = (props) => {
  const { classes, auth, avatar } = props;
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className={classes.header}>
          <div>{'Rukeith\'s blog'}</div>
          <TextField
            id="search"
            label="Search field"
            type="search"
            placeholder="Search here"
            className={classes.textField}
            margin="normal"
          />
          <NavItems path="/intro" title="Intro" />
          <NavItem path="/articles" title="Blog" />
          {
            (() => {
              if (auth) {
                return (
                  <Button color="inherit">Logout</Button>
                );
              }
              return (
                <Button color="inherit">Login</Button>
              );
            })()
          }

          {/* {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
