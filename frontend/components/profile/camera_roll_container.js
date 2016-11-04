import {connect} from 'react-redux';
import CameraRoll from './camera_roll';
import {updatePhoto} from '../../actions/photo_actions';

const mapStateToProps = ({photos}) => ({
  photos
});

const mapDispatchToProps = dispatch => ({
  updatePhoto: attributes => dispatch(updatePhoto(attributes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraRoll);
