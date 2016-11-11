import {connect} from 'react-redux';
import PhotoDetail from './photo_detail';
import {toArray, requestType} from '../../reducers/selectors';
import {requestPhotos, fetchByTag} from '../../actions/photo_actions';
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

const mapDispatchToProps = dispatch => {
  const request = requestType(fetchByTag, requestPhotos);
  return{
    createTag: (photoId, tag) => dispatch(createTag(photoId, tag)),
    requestPhotos: () => dispatch(request()),
    destroyTag: (photoId, tag) => dispatch(destroyTag(photoId, tag))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
