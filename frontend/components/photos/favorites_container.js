import { connect } from 'react-redux';
import {favorite, unfavorite} from '../../actions/favorite_actions';
import Favorite from './favorite';

const mapStateToProps = ({session}, {photo}) => ({
  currentUser: session.currentUser,
  photo
});

const mapDispatchToProps = dispatch => ({
  favorite: photoId => dispatch(favorite(photoId)),
  unfavorite: photoId => dispatch(unfavorite(photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
