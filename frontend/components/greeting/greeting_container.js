import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: guest => dispatch(login(guest))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
