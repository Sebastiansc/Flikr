import {connect} from 'react-redux';
import LightBox from './lightbox';
import {requestPhotos} from '../../../actions/photo_actions';
import {toArray} from '../../../reducers/selectors';

const _nullPhoto = {
  img_url: undefined,
  id: undefined,
  author: {}
};

const mapStateToProps = ({photos}, {params}) => ({
  photo: photos[Number(params.photoId)] || _nullPhoto,
  photos: toArray(photos)
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: (limit, offset) => dispatch(requestPhotos(limit, offset))
});

export default connect(mapStateToProps, mapDispatchToProps)(LightBox);
