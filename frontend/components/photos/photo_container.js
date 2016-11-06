import {connect} from 'react-redux';
import PhotoDetail from './photo_detail';
import {photosArray} from '../../reducers/selectors';
import {requestPhotos} from '../../actions/photo_actions';
import {createTag} from '../../actions/tag_actions';

const _nullPhoto = {
  img_url: undefined,
  id: undefined,
  author: {},
  tags: []
};

const mapStateToProps = ({photos}, {params}) => ({
  photo: photos[Number(params.photoId)] || _nullPhoto,
  photos: photosArray(photos)
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
  createTag: (photoId, tag) => dispatch(createTag(photoId, tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
