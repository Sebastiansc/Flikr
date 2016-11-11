import {connect} from 'react-redux';
import LightBox from './lightbox';
import {requestPhotos} from '../../../actions/photo_actions';
import {toArray} from '../../../reducers/selectors';

const _nullPhoto = {
  img_url: undefined,
  id: undefined,
  author: {}
};

const mapStateToProps = ({photos}, {params, location}) => {
  let fetch;
  if(location.pathname.includes('explore')){
    fetch  = 'explore';
  } else if (location.pathname.includes('favorites')){
    fetch = 'favorites';
  } else {
    fetch = 'userPhotos';
  }
  let path = location.pathname.split('/');
  path.pop();
  path.shift();
  path = path.join('/');

  return {
    photo: photos[Number(params.photoId)] || _nullPhoto,
    photos: toArray(photos),
    fetch,
    path
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhotos: (limit, offset) => dispatch(requestPhotos(limit, offset))
});

export default connect(mapStateToProps, mapDispatchToProps)(LightBox);
