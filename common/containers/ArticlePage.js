import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ArticlePage = () => (
  <div>
    I am article page
  </div>
);

export default withRouter(connect()(ArticlePage));
