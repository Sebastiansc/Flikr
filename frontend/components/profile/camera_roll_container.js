import {connect} from 'react-redux';
import CameraRoll from './camera_roll';
import {updatePhoto, deletePhoto} from '../../actions/photo_actions';
import {selectPhoto, photosArray} from '../../reducers/selectors';
import {toggleModal, setEditId} from '../../actions/edit_actions';

const mapStateToProps = ({person, editing}) => ({
  photo: selectPhoto(person.photos, editing.id),
  photos: photosArray(person.photos),
  open: editing.modalOpen
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