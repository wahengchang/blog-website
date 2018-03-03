import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const TageList = () => (
  <div>
    I am tag list
  </div>
);

export default withRouter(connect()(TageList));
