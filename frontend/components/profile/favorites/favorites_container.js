import { connect } from 'react-redux';
import FavoritesGallery from './favorites_gallery';
import { toArray } from '../../../reducers/selectors';

const mapStateToProps = ({photos}) => ({
  photos: toArray(photos)
});

export default connect(mapStateToProps)(FavoritesGallery);
