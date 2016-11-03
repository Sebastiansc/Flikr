import {connect} from 'react-redux';
import PhotoDetail from './photo_detail';
import {photosArray} from '../../reducers/selectors';

const mapStateToProps = ({photos}, {params}) => {
  return(
    {
      photo: photos[Number(params.photoId)],
      photos: photosArray(photos)
    }
  );
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
