import {connect} from 'react-redux';
import PhotoStream from './photo_stream';
import {publicPhotos} from '../../reducers/selectors';

const mapStateToProps = ({person, photos, session}) => ({
  photos: publicPhotos(photos),
  currentUser: session.currentUser,
  person
});

export default connect(mapStateToProps)(PhotoStream);
