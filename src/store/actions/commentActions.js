export const createComment = (newComment, postID) => {
  return (dispatch, getState, {getFirebase, getFirestore, HttpService, urls, DataUtil}) => 
    HttpService.post( urls.comments(postID), DataUtil.formMulti(newComment) )
      .then( response => response.comment)
}
