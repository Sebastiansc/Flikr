import {connect} from 'react-redux';
import Profile from './profile';
import {createPhoto, requestPhoto} from '../../actions/photo_actions';
import {getUser, changeProfilePic} from '../../actions/person_actions';
import {toArray} from '../../reducers/selectors';

const mapStateToProps = ({person, photos, session}) => ({
    photos: toArray(photos),
    currentUser: session.currentUser,
    person
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  requestPhotos: id => dispatch(getUser(id)),
  changeProfilePic: (userId, url) => dispatch(changeProfilePic(userId, url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
