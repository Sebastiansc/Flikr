import {connect} from 'react-redux';
import Profile from './profile';
import {createPhoto, requestPhoto} from '../../actions/photo_actions';
import {getUser} from '../../actions/person_actions';
import {toArray} from '../../reducers/selectors';

const mapStateToProps = ({person, photos, userId}) => ({
    photos: toArray(photos),
    person
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  requestPhotos: id => dispatch(getUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
