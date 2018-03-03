import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const IntroPage = () => (
  <div>
    I am intro page
  </div>
);

export default withRouter(connect()(IntroPage));
