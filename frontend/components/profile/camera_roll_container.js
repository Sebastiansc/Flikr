import {connect} from 'react-redux';
import CameraRoll from './camera_roll';
import {updatePhoto, deletePhoto} from '../../actions/photo_actions';
import {selectPhoto, toArray} from '../../reducers/selectors';
import {toggleModal, setEditId} from '../../actions/edit_actions';

const mapStateToProps = ({userPhotos, editing}, {params}) => ({
  photo: selectPhoto(userPhotos, editing.id),
  photos: toArray(userPhotos),
  open: editing.modalOpen,
  userId: params.userId
});

const mapDispatchToProps = dispatch => ({
  updatePhoto: attributes => dispatch(updatePhoto(attributes)),
  deletePhoto: id => dispatch(deletePhoto(id)),
  toggleModal: () => dispatch(toggleModal()),
  setEditId: id => dispatch(setEditId(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraRoll);
