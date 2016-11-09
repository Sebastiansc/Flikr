import {connect} from 'react-redux';
import Albums from './albums';
import { toArray } from '../../../reducers/selectors';
import {createAlbum,
        createAndAddPhoto,
        deleteAlbum,
        updateAlbum } from '../../../actions/album_actions';

const mapStateToProps = ({albums, photos, session, person}) => ({
  albums: toArray(albums),
  currentUser: session.currentUser,
  photos: toArray(photos),
  person
});

const mapDispatchToProps = dispatch => ({
  createAlbum: (album, photos) => dispatch(createAlbum(album, photos)),
  deleteAlbum: albumId => dispatch(deleteAlbum(albumId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
