import {connect} from 'react-redux';
import PhotoDetail from './photo_detail';
import {photosArray} from '../../reducers/selectors';
import {requestPhotos} from '../../actions/photo_actions';

const _nullPhoto = {
  img_url: undefined,
  id: undefined,
  author: {}
};

const mapStateToProps = ({photos}, {params}) => {
  return(
    {
      photo: photos[Number(params.photoId)] || _nullPhoto,
      photos: photosArray(photos)
    }
  );
};

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
