import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const IntroPage = () => (
  <main>
    I am intro page
  </main>
);

export default withRouter(connect()(IntroPage));
