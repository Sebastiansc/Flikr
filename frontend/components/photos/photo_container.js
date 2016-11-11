import {connect} from 'react-redux';
import PhotoDetail from './photo_detail';
import {toArray, requestType} from '../../reducers/selectors';
import {requestPhotos,
        fetchByTag,
        fetchInBatch} from '../../actions/photo_actions';
import {createTag, destroyTag} from '../../actions/tag_actions';
import {getUser, fetchFavorites} from '../../actions/person_actions';
import {publicPhotos} from '../../reducers/selectors';

const _nullPhoto = {
  img_url: undefined,
  id: undefined,
  author: {},
  tags: [],
  favorites: {},
  albums: {}
};

const mapStateToProps = ({photos, comments, person}, {params, location}) => {
  let fetch;
  if(location.pathname.includes('explore')){
    fetch  = 'explore';
  } else if (location.pathname.includes('favorites')){
    fetch = 'favorites';
  } else {
    fetch = 'userPhotos';
  }

  let path = location.pathname.split('/');
  path.pop();
  if (!path.includes('explore')) path.pop();
  path.shift();
  path = path.join('/');

  return {
    photo: photos[Number(params.photoId)] || _nullPhoto,
    photoId: params.photoId,
    photos: toArray(photos),
    fetch,
    personId: params.userId,
    person,
    path,
    comments
  };
};

const mapDispatchToProps = dispatch => {

  return{
    createTag: (photoId, tag) => dispatch(createTag(photoId, tag)),
    fetchInBatch: photoId => dispatch(fetchInBatch(photoId)),
    getUser: userId => dispatch(getUser(userId)),
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    destroyTag: (photoId, tag) => dispatch(destroyTag(photoId, tag))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
