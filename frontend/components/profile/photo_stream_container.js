import {connect} from 'react-redux';
import PhotoStream from './photo_stream';
import {getUser} from '../../actions/person_actions';

const mapStateToProps = ({person}) => ({
    photos: person.photos,
    person
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: id => dispatch(getUser(id))
});

export default connect(mapStateToProps)(PhotoStream);
