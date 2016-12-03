import {connect} from 'react-redux';
import PhotoDetail from './photo_detail';
import {toArray} from '../../reducers/selectors';
import {requestPhotos} from '../../actions/photo_actions';
import {createTag, destroyTag} from '../../actions/tag_actions';

const mapStateToProps = (state, {params, location}) => {
  const slice = location.pathname.split('/')[2];
  return {
    photo: state[slice][Number(params.photoId)],
    photos: toArray(state[slice]),
    comments: state["comments"]
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
  createTag: (photoId, tag) => dispatch(createTag(photoId, tag)),
  destroyTag: (photoId, tag) => dispatch(destroyTag(photoId, tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
