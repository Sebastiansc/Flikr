import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import {createPhoto} from '../../actions/photo_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
