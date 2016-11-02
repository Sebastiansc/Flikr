import { connect } from 'react-redux';
import Images from './images';
import { requestPhotos } from '../../actions/photo_actions';
import { photosArray } from '../../reducers/selectors.js';

const mapStateToProps = ({ photos }) => ({
  photos: photosArray(photos),
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Images);
