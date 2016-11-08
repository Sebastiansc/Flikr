import {connect} from 'react-redux';
import CameraRoll from './camera_roll';
import {updatePhoto, deletePhoto} from '../../actions/photo_actions';
import {selectPhoto, toArray} from '../../reducers/selectors';
import {toggleModal, setEditId} from '../../actions/edit_actions';

const mapStateToProps = ({photos, editing}, {params}) => ({
  photo: selectPhoto(photos, editing.id),
  photos: toArray(photos),
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
