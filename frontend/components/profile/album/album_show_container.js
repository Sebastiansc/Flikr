import {connect} from 'react-redux';
import {updateAlbum, createAndAddPhoto} from '../../../actions/album_actions';
import AlbumShow from './album_show';

const _nullAlbum = {
  owner: {},
  cover_photo: {},
  photos: []
};

const mapStateToProps = ({albums}, {params}) => ({
  album: albums[params.albumId] || _nullAlbum
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: album => dispatch(updateAlbum(album)),
  createAndAddPhoto: (albumId,photo) => dispatch(createAndAddPhoto(albumId, photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
