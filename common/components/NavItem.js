import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  navItem: {
    color: 'red',
    alignContent: 'center',
  },
};

const NavItem = ({ title, path, classes }) => (
  <NavLink exact to={path} classes={classes.navItem}>
    <Typography variant="title" color="inherit">
      {title}
      {classes.navItem}
    </Typography>
  </NavLink>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavItem);
