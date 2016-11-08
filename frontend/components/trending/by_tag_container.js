import {connect} from 'react-redux';
import ByTagGallery from './by_tag_gallery';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({photos, tags}, {params}) => {
  return{
    tag: tags[params.tagId] || {},
    photos: toArray(photos)
  };
};

export default connect(mapStateToProps)(ByTagGallery);
