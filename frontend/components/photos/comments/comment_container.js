import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {createComment,
        updateComment,
        deleteComment} from '../../../actions/comment_actions';
import {commentsArray} from '../../../reducers/selectors';

const mapStateToProps = ({comments, session}) => ({
  comments: commentsArray(comments),
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CommentForm);
