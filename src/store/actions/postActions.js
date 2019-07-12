export const createPost = (newPost) => {
  return (dispatch, getState, {getFirebase, getFirestore, HttpService, urls, DataUtil}) => {
    HttpService.post( urls.posts(), DataUtil.formMulti(newPost) );
  }
}
