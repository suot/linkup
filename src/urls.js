import {config} from './env'

export const urls = {
  api_url: config.url.API_URL,
  
  postIndex: function() {
    return this.api_url+"/posts";
  },

  postShow: function(id) {
    return this.api_url+"/post/:id".replace(":id", id);
  },

  commentIndex: function(postId) {
    return this.api_url+"post/:postId/comments".replace(":postId", postId);
  },

  commentShow: function(postId, id) {
    return this.api_url+"post/:postId/comments/:id".replace(":postId", postId).replace(":id", id);
  }
}
