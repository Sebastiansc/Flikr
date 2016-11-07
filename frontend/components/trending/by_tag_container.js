import {connect} from 'react-redux';
import ByTagGallery from './by_tag_gallery';
import { photosArray } from '../../reducers/selectors';

const mapStateToProps = ({photos, tags}, {params}) => {
  return{
    tag: tags[params.tagId] || {},
    photos: photosArray(photos)
  };
};

export default connect(mapStateToProps)(ByTagGallery);
