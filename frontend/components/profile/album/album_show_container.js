import {connect} from 'react-redux';
import {updateAlbum,
        createAndAddPhoto,
        addPhoto,
        dropPhoto,
        fetchAlbum,
        changeCoverPhoto} from '../../../actions/album_actions';
import { createPhoto} from '../../../actions/photo_actions';
import { toArray } from '../../../reducers/selectors';
import AlbumShow from './album_show';

const _nullAlbum = {
  owner: {},
  cover_photo: {},
  photos: []
};

const mapStateToProps = ({albums, userPhotos, session, user}, {params}) => ({
  album: albums[params.albumId] || _nullAlbum,
  currentUser: session.currentUser,
  photos: toArray(userPhotos),
  user
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: album => dispatch(updateAlbum(album)),
  createPhoto: photo => dispatch(createPhoto(photo)),
  addPhoto: album => dispatch(addPhoto(album)),
  dropPhoto: (photoId, albumId) => dispatch(dropPhoto(photoId, albumId)),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  changeCoverPhoto: (albumId, photoId) => dispatch(changeCoverPhoto(albumId, photoId)),
  createAndAddPhoto: (albumId,photo) => dispatch(createAndAddPhoto(albumId, photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
