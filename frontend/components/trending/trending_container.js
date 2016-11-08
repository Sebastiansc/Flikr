import {connect} from 'react-redux';
import TrendingGallery from './trending_gallery';
import {toArray} from '../../reducers/selectors';

const mapStateToProps = ({tags}) => ({
  tags: toArray(tags)
});

export default connect(mapStateToProps)(TrendingGallery);
