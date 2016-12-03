import {connect} from 'react-redux';
import Profile from './profile';
import {createPhoto, requestPhoto} from '../../actions/photo_actions';
import {getUser,
        changeProfilePic,
        changeUserCover} from '../../actions/user_actions';
import {toArray} from '../../reducers/selectors';

const mapStateToProps = ({user, userPhotos, session}) => ({
    photos: toArray(userPhotos),
    currentUser: session.currentUser,
    user
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  changeUserCover: (photoId, userId) => dispatch(changeUserCover(photoId, userId)),
  changeProfilePic: (userId, url) => dispatch(changeProfilePic(userId, url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
