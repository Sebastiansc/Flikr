import {connect} from 'react-redux';
import LightBox from './lightbox';
import {requestPhotos} from '../../../actions/photo_actions';
import {photosArray} from '../../../reducers/selectors';

const _nullPhoto = {
  img_url: undefined,
  id: undefined,
  author: {}
};

const mapStateToProps = ({photos}, {params}) => ({
  photo: photos[Number(params.photoId)] || _nullPhoto,
  photos: photosArray(photos)
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(LightBox);
