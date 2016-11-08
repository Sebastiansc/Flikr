import {connect} from 'react-redux';
import {updateAlbum, createAndAddPhoto} from '../../../actions/album_actions';
import AlbumShow from './album_show';

const mapStateToProps = ({albums}, {albumId}) => ({
  album: albums[albumId]
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: album => dispatch(updateAlbum()),
  createAndAddPhoto: (albumId,photo) => dispatch(createAndAddPhoto(albumId, photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
