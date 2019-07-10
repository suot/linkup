export default function HttpService() {
  return({
    post: function(url, data) {
      fetch(url, {
        method: "POST",
        data: JSON.stringify(data), // will be replaced by FormData
        headers: {
          "Content-Type": "application/json"
        }
      });
    },

    get: function(url) {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
    },

    put: function(url, data) {
      fetch(url, {
        method: "PUT",
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    
    patch: function(url) {}

  }); 
}