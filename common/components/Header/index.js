import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../NavItem';
import SearchInput from '../SearchInput';
import './style.scss';

const Header = (props) => {
  const { auth } = props;
  return (
    <header>
      <div id="logo">{'Rukeith\'s blog'}</div>
      <SearchInput />
      <NavItem path="/intro" title="Intro" />
      <NavItem path="/articles" title="Blog" />
      {/* {
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
      } */}
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Header;
