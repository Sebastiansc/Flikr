import {connect} from 'react-redux';
import AlbumGallery from './album_gallery';
import { toArray } from '../../../reducers/selectors';
import {createAlbum,
        createAndAddPhoto,
        deleteAlbum,
        updateAlbum } from '../../../actions/album_actions';

const mapStateToProps = ({albums, session, person}) => ({
  albums: toArray(albums),
  currentUser: session.currentUser,
  person
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album)),
  deleteAlbum: albumId => dispatch(deleteAlbum(albumId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumGallery);
