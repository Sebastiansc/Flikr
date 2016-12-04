import { connect } from 'react-redux';
import Tags from './tags';
import { toArray } from '../../reducers/selectors';
import { createTag, destroyTag } from '../../actions/tag_actions';

const mapStateToProps = ({photoTags}, {photoId}) => ({
  tags: toArray(photoTags),
  photoId
});

const mapDispatchToProps = dispatch => ({
  createTag: (photoId, tag) => dispatch(createTag(photoId, tag)),
  destroyTag: (photoId, tag) => dispatch(destroyTag(photoId, tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
