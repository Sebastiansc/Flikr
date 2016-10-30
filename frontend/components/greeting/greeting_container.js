import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  username: state.session.username
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: guest => dispatch(login(guest))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
