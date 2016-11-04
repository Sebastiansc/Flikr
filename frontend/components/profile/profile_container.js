import {connect} from 'react-redux';
import Profile from './profile';
import {createPhoto} from '../../actions/photo_actions';

const mapStateToProps = state => {
  return{
    person: state.person
  };
};

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
