import { connect } from 'react-redux';
import AlbumAdd from './album_add';
import {addPhoto, fetchUserAlbums} from '../../../actions/album_actions';
import { toArray } from '../../../reducers/selectors';

const mapStateToProps = ({albums, editing}, ownProps) => ({
  albums: toArray(albums),
  photoId: editing.id,
  userId: ownProps.userId,
  open: ownProps.open,
  togglePhotoAdd: ownProps.togglePhotoAdd
});

const mapDispatchToProps = dispatch => ({
  addPhoto: (albumId, photoId) => dispatch(addPhoto(albumId, photoId)),
  fetchUserAlbums: userId => dispatch(fetchUserAlbums(userId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumAdd);
