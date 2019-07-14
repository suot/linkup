export const HttpService = {
  
  post: (url, data) => 
    fetch(url, {
      method: "POST",
      body: data 
    })
    .then( promise => promise.json()),

  get: (url) => 
    fetch(url, {
      method: "GET"
    })
    .then(promise => promise.json()),

  put: (url, data) => 
    fetch(url, {
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }),
  
  patch: function(url) {}

}