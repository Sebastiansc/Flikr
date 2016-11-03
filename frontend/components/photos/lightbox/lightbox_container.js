import {connect} from 'react-redux';
import LightBox from './lightbox';

const mapStateToProps = ({photos}, {params}) => ({
  photo: photos[Number(params.photoId)]
});

export default connect(mapStateToProps)(LightBox);
