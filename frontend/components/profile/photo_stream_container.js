import {connect} from 'react-redux';
import PhotoStream from './photo_stream';
import {getUser} from '../../actions/person_actions';
import {publicPhotos} from '../../reducers/selectors';

const mapStateToProps = ({person}) => ({
    photos: publicPhotos(person.photos),
    person
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: id => dispatch(getUser(id))
});

export default connect(mapStateToProps)(PhotoStream);
