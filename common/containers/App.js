import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

App.propTypes = {
  // auth: PropTypes.bool.isRequired,
  route: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({ auth: state.user.token !== '' });

export default withRouter(connect()(App));
