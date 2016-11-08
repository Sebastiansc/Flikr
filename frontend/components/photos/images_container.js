import { connect } from 'react-redux';
import Images from './images';
import { requestPhotos } from '../../actions/photo_actions';
import { toArray } from '../../reducers/selectors.js';

const mapStateToProps = ({ photos }) => ({
  photos: toArray(photos),
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Images);
