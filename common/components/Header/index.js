import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../NavItem';
import SearchInput from '../SearchInput';
import './style.scss';

const Header = (props) => {
  const { auth, open, location = {} } = props;

  let className = (auth) ? 'login-auth' : '';
  className += (open) ? ' menu-open' : '';

  return (
    <header className={className}>
      <div id="header-menu">
        <span className="hamburger-top" />
        <span className="hamburger-mid" />
        <span className="hamburger-bottom" />
      </div>
      <div id="logo">{'Rukeith\'s blog'}</div>
      <SearchInput />
      <NavItem path="/intro" title="Intro" />
      <NavItem path="/articles" title="Blog" />
      {
        (() => {
          if (auth) {
            return (
              <NavItem path="/create" title="Creaete Article" />
            );
          }
        })()
      }
      {
        (() => {
          if (auth) {
            return (
              <NavItem path="/logout" title="Logout" />
            );
          }
          return (
            <NavItem path="/login" title="Login" />
          );
        })()
      }
    </header>
  );
};

Header.defaultProps = {
  auth: true,
  open: true,
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  auth: PropTypes.bool,
  open: PropTypes.bool,
};

export default Header;
