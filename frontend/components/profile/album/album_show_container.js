import {connect} from 'react-redux';
import {updateAlbum,
        createAndAddPhoto,
        addPhoto,
        fetchAlbum} from '../../../actions/album_actions';
import { createPhoto} from '../../../actions/photo_actions';
import AlbumShow from './album_show';

const _nullAlbum = {
  owner: {},
  cover_photo: {},
  photos: []
};

const mapStateToProps = ({albums, photos}, {params}) => ({
  album: albums[params.albumId] || _nullAlbum,
  photos
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: album => dispatch(updateAlbum(album)),
  createPhoto: photo => dispatch(createPhoto(photo)),
  addPhoto: album => dispatch(addPhoto(album)),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  createAndAddPhoto: (albumId,photo) => dispatch(createAndAddPhoto(albumId, photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
