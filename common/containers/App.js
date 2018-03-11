import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = {
  display: 'grid',
  gridTemplateRows: '65px 1fr 300px',
};

const App = ({ route }) => (
  <div style={styles}>
    <Header />
    {/* {renderRoutes(route.routes)} */}
    {/* <Footer /> */}
  </div>
);

App.propTypes = {
  // auth: PropTypes.bool.isRequired,
  route: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({ auth: state.user.token !== '' });

export default withRouter(connect()(App));
