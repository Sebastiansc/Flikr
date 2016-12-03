import {connect} from 'react-redux';
import PhotoStream from './photo_stream';
import {publicPhotos} from '../../reducers/selectors';

const mapStateToProps = ({user, userPhotos, photos, session}) => ({
  photos: publicPhotos(userPhotos)
});

export default connect(mapStateToProps)(PhotoStream);
