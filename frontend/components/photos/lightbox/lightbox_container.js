import {connect} from 'react-redux';
import LightBox from './lightbox';
import {requestPhotos} from '../../../actions/photo_actions';
import {toArray} from '../../../reducers/selectors';


const mapStateToProps = (state, {params, location}) => {
  const slice = location.pathname.split('/')[2];
  return {
    photo: state[slice][Number(params.photoId)],
    photos: toArray(state[slice]),
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LightBox);
