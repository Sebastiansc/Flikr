import {connect} from 'react-redux';
import PhotoDetail from './photo_detail';
import {toArray} from '../../reducers/selectors';
import {requestPhotos} from '../../actions/photo_actions';
import {createTag, destroyTag} from '../../actions/tag_actions';

const _nullPhoto = {
  img_url: undefined,
  id: undefined,
  author: {},
  tags: [],
  favorites: {},
  albums: {}
};

const mapStateToProps = ({photos, comments}, {params}) => ({
  photo: photos[Number(params.photoId)] || _nullPhoto,
  photos: toArray(photos),
  comments
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: (limit, offset) => dispatch(requestPhotos(limit,offset)),
  createTag: (photoId, tag) => dispatch(createTag(photoId, tag)),
  destroyTag: (photoId, tag) => dispatch(destroyTag(photoId, tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
