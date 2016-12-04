import { connect } from 'react-redux';
import {updateAlbum,
        createAndAddPhoto,
        addPhoto,
        dropPhoto,
        fetchAlbum,
        changeCoverPhoto} from '../../../actions/album_actions';
import { toArray } from '../../../reducers/selectors';
import AlbumShow from './album_show';

const mapStateToProps = ({albums, userPhotos, albumPhotos, session, user}, {params}) => ({
  album: albums[params.albumId],
  currentUser: session.currentUser,
  userPhotos: toArray(userPhotos),
  photos: toArray(albumPhotos),
  user
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: album => dispatch(updateAlbum(album)),
  addPhoto: album => dispatch(addPhoto(album)),
  dropPhoto: (photoId, albumId) => dispatch(dropPhoto(photoId, albumId)),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  changeCoverPhoto: (albumId, photoId) => dispatch(changeCoverPhoto(albumId, photoId)),
  createAndAddPhoto: (albumId, photo) => dispatch(createAndAddPhoto(albumId, photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
