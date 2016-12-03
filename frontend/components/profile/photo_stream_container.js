import {connect} from 'react-redux';
import PhotoStream from './photo_stream';
import {publicPhotos} from '../../reducers/selectors';

const mapStateToProps = ({user, userPhotos}) => ({
  photos: publicPhotos(userPhotos),
  userId: user.id
});

export default connect(mapStateToProps)(PhotoStream);
