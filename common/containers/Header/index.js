import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HeaderActions from '../../actions/header';
import NavItem from '../../components/NavItem';
import SearchInput from '../../components/SearchInput';
import './style.scss';

const Header = ({ token, menuOpen, menuClick }) => {
  let className = (menuOpen) ? 'menu-open ' : '';
  className += (token) ? 'login-auth ' : '';

  return (
    <header className={className}>
      <div id="header-menu" role="presentation" onClick={menuClick}>
        <span className="hamburger-top" />
        <span className="hamburger-mid" />
        <span className="hamburger-bottom" />
      </div>
      <div id="logo">{'Rukeith\'s blog'}</div>
      <SearchInput />
      <NavItem path="/intro" title="Intro" />
      <NavItem path="/articles" title="Blog" />
      {
        token && <NavItem path="/create" title="Creaete Article" />
      }
      {
        token ? (<NavItem path="/logout" title="Logout" />) : (<NavItem path="/login" title="Login" />)
      }
    </header>
  );
};

Header.defaultProps = {
  token: '',
  menuOpen: false,
};

Header.propTypes = {
  token: PropTypes.string,
  menuOpen: PropTypes.bool,
  menuClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  menuOpen: state.header,
});

const mapDispatchToProps = dispatch => bindActionCreators(HeaderActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
