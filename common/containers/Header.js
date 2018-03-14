import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as HeaderActions from '../actions';

const mapStateToProps = state => ({
  Header: state.Header,
});

const mapDispatchToProps = dispatch => bindActionCreators(HeaderActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
