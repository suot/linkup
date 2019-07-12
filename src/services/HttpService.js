export const HttpService = {
  
  post: function(url, data) {
    fetch(url, {
      method: "POST",
      mode: "no-cors", //should be resolved - security issue
      body: data 
      }
    );
  },

  get: function(url) {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        }
      }
    );
  },

  put: function(url, data) {
    fetch(url, {
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
        }
      }
    );
  },
  
  patch: function(url) {}

}