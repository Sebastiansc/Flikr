import {FETCH_PHOTO_COMMENTS,
        DELETE_COMMENT,
        UPDATE_COMMENT,
        CREATE_COMMENT,
        receivePhotoComments,
        removeComment,
        renewComment,
        receiveComment} from '../actions/comment_actions';

import {postComment,
        patchComment,
        deleteComment,
        getComments} from '../util/comments_api_util';

const CommentsMiddleware = ({dispatch}) => next => action => {
  let success;

  switch(action.type) {
    case FETCH_PHOTO_COMMENTS:
      success = comments => dispatch(receivePhotoComments(comments));
      getComments(action.photoId, success);
      return next(action);
    case CREATE_COMMENT:
      success = comment => dispatch(receiveComment(comment));
      postComment(action.comment, success);
      return next(action);
    case UPDATE_COMMENT:
      success = comment => dispatch(renewComment(comment));
      patchComment(action.comment, success);
      return next(action);
    case DELETE_COMMENT:
      success = comment => dispatch(removeComment(comment));
      deleteComment(action.id, success);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentsMiddleware;
