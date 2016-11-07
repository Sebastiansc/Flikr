import {connect} from 'react-redux';
import TrendingGallery from './trending_gallery';
import {tagsArray} from '../../reducers/selectors';

const mapStateToProps = ({tags}) => ({
  tags: tagsArray(tags)
});

export default connect(mapStateToProps)(TrendingGallery);
