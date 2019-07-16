export const DataUtil = {
  formMulti: function(form) {
    return( new FormData(form) );
  },
  
  jsonUser: function(hash) { 
    const user = {
      user: hash
    };

    return JSON.stringify(user);
  }
}
