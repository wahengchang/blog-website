import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ArticlePage = () => (
  <main>
    I am article page
  </main>
);

export default withRouter(connect()(ArticlePage));
