import {connect} from 'react-redux';
import {updateAlbum,
        createAndAddPhoto,
        addPhoto,
        dropPhoto,
        fetchAlbum} from '../../../actions/album_actions';
import { createPhoto} from '../../../actions/photo_actions';
import AlbumShow from './album_show';

const _nullAlbum = {
  owner: {},
  cover_photo: {},
  photos: []
};

const mapStateToProps = ({albums, photos, session}, {params}) => ({
  album: albums[params.albumId] || _nullAlbum,
  currentUser: session.currentUser,
  photos
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: album => dispatch(updateAlbum(album)),
  createPhoto: photo => dispatch(createPhoto(photo)),
  addPhoto: album => dispatch(addPhoto(album)),
  dropPhoto: (photoId, albumId) => dispatch(dropPhoto(photoId, albumId)),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  createAndAddPhoto: (albumId,photo) => dispatch(createAndAddPhoto(albumId, photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
