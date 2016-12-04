import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { toArray } from '../../reducers/selectors';
import { requestPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, {params, location}) => {
  const slice = location.pathname.split('/')[2];
  return {
    photo: state[slice][Number(params.photoId)],
    photos: toArray(state[slice]),
    comments: state["comments"],
    fans: state["fans"]
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
