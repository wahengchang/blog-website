import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavItem from '../../components/NavItem';
import SearchInput from '../../components/SearchInput';
import './style.scss';

class Header extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let className = (this.props.menuOpen) ? 'menu-open ' : '';
    className += (this.props.token) ? 'login-auth ' : '';

    return (
      <header className={className}>
        <div id="header-menu" role="presentation" onClick={() => {}} onKeyDown={this.props.menuClick}>
          <span className="hamburger-top" />
          <span className="hamburger-mid" />
          <span className="hamburger-bottom" />
        </div>
        <div id="logo">{'Rukeith\'s blog'}</div>
        <SearchInput />
        <NavItem path="/intro" title="Intro" />
        <NavItem path="/articles" title="Blog" />
        {
          this.props.token && <NavItem path="/create" title="Creaete Article" />
        }
        {
          this.props.token ? (<NavItem path="/logout" title="Logout" />) : (<NavItem path="/login" title="Login" />)
        }
      </header>
    );
  }
}

Header.defaultProps = {
  token: '',
  menuOpen: false,
};

Header.propTypes = {
  menuClick: PropTypes.func.isRequired,
  token: PropTypes.string,
  menuOpen: PropTypes.bool,
};

export default connect()(Header);
